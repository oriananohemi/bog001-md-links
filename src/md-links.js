const http = require('http');
const https = require('https');
const marked = require('marked');
const utils = require('../src/utils.js');
const read = require('../src/handleFile.js');

const statsLinks = (count, links) => {
  const linksUniqueArray = [...new Set(links.map(link => link.href))].length
  const stats = {
    total: count,
    unique: linksUniqueArray
  }
  return stats
}

const validateLink = (elementHref) => {
  let promise;
  if(elementHref.charAt(0) === '#') {
    promise = new Promise((resolver, reject) => {
      resolver('Es un enlace interno')
    })
  } else {
    const url = new URL(elementHref);
    const client = url.protocol === "https:" ? https : http;
    promise = new Promise((resolver, reject) => {
      client.get(url.href, (res) => {
        resolver(res.statusCode);
      }).on('error', (error) => {
        reject(error);
      });
    });
  }
  return promise;
}

const getLinks = async (data, options, filePath) => {
  const links = [];
  const fileHTML = marked(data);
  
  const link = fileHTML.split('href=');
  
  link.shift()
  
  link.forEach(async element => {
    const href = element.split(element[0])[1];
    const text = element.split('>')[1].split('</a')[0];
    const linkInfo = {
      href,
      text,
      file: filePath
    }

    if(options.validate) {
      try {
        linkInfo.status = await validateLink(href);
      } catch(error) {
        console.error(error)
      }
    }
    links.push(linkInfo);

    if(options.stats) {
      const count = link.length
      console.log( statsLinks(count, links))
    }
  });
  // if(options.stats && options.validate) {
  //   statsLinks(count, links);
  //   let broke = 0;
  //   // links.forEach(link => {
  //   //    if(validateLink(link.href) > 400) {
  //   //      broke++
  //   //      console.log(link.href)
  //   //    }
  //   // })
  // }
  return links;
}

const defaultOptions = {
  validate: false,
  stats: false
}

const mdLinks = async (pathName, options = defaultOptions) => {
  const filePath = utils.buildRoute(pathName);
  const typeFileRequired = '.md';

  const handleError = (err) => {
    console.error(`Ha ocurrido un error tratando de leer el archivo, ${err}`)
  }
  let promise;
  const isMD = utils.checkFileType(filePath, typeFileRequired);
  if(isMD) {
    promise = new Promise((resolve) => {
      const successCallback = (data) => {
        const linksArray = getLinks(data, options, filePath)
        resolve(linksArray);
      }
      read(filePath, successCallback, handleError );
      });
  } else {
    promise = new Promise((resolve, reject) => {
      reject(error);
    });
  }

  return promise;
}

module.exports = mdLinks;
