const http = require('http');
const https = require('https');
const marked = require('marked');
const utils = require('../src/utils.js');
const handleFile = require('../src/handleFile.js');


const statsLinks = (elementHref) => {
  const links = [];
  if(links.length === 0) {
    links.push(elementHref);
    console.log(links)
  } else {
    links.map(link => {
      if(link !== elementHref) {
        links.push(elementHref);
      }
    })
  }
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

const getLinks = (data, options, filePath) => {
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
      linkInfo.status = await validateLink(href);
    }
    if(options.stats) {
      statsLinks(href)
    }
    links.push(linkInfo);
    console.log(links)
  });
}

const mdLinks = async (pathName, options) => {
  const filePath = utils.buildRoute(pathName);
  const typeFileRequired = '.md';

  const handleError = (err) => {
    console.error(`Ha ocurrido un error tratando de leer el archivo, ${err}`)
  }

  const isMD = utils.checkFileType(filePath, typeFileRequired);
  if(isMD) {
    handleFile.read(filePath, (data) => getLinks(data, options, filePath), (err) => handleError(err) );
  } else {
    console.error(`El archivo no es de tipo ${typeFileRequired}`)
  }
}


module.exports = mdLinks