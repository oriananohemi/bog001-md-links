const http = require('http');
const https = require('https');
const marked = require('marked');
const utils = require('../src/utils.js');
const handleFile = require('../src/handleFile.js');

const statsLinks = (links, validate = false) => {
    const count = links.length;
    const linksUniqueArray = [...new Set(links.map(link => link.href))]
    const stats = {
      total: count,
      unique: linksUniqueArray.length
    }

    if(validate) {
      stats.broken = links.reduce((accumulator, currentElement) => {
        accumulator += currentElement.status < 400 || currentElement.status == 'Es un enlace interno' ? 0 : 1;
        return accumulator;
      }, 0)
    }
  return stats
  ;
}

const validateLink = (elementHref) => {
  let promise;
  if(elementHref.charAt(0) === '#') {
    promise = new Promise((resolver) => {
      resolver('Es un enlace interno')
    })
  } else {
    const url = new URL(elementHref);
    const client = url.protocol === "https:" ? https : http;
    promise = new Promise((resolve, reject) => {
      client.get(url.href, (res) => {
        resolve(res.statusCode);
      }).on('error', (error) => {
        reject(error.code);
      });
    });
  }
  return promise;
}

const getLinks = (data, options, filePath) => {
  const promise = new Promise((resolve) => {
    const fileHTML = marked(data);
    const linksArray = fileHTML.split('href=');

    linksArray.shift();

    const links = linksArray.map(element => {
      const href = element.split(element[0])[1];
      const text = element.split('>')[1].split('</a')[0];
      const linkInfo = {
        href,
        text,
        file: filePath,
      }
      return linkInfo
    })

    if(options.validate) {
      const linksPromise = links.map((link) => {
        return validateLink(link.href);
      })

      Promise.allSettled(linksPromise)
      .then((result) => {
        result.forEach((res, index) => {
          links[index].status = res.value || res.reason;
          links[index].value = res.value < 400 || links[index].status === 'Es un enlace interno' ? 'OK' : 'Fail'
        })
        if(options.stats) {
          const stats = statsLinks(links, options.validate)
          resolve(stats);
          return;
        }
        resolve(links)
      })
      return;
    }

    if(options.stats) {
      const stats = statsLinks(links, options.validate)
      resolve(stats);
      return;
    }

    resolve(links);
  })
  return promise;
}

const defaultOptions = {
  validate: false,
  stats: false
}

const mdLinks = (pathName, options = defaultOptions) => {
  const filePath = utils.buildRoute(pathName);
  const typeFileRequired = '.md';

  const isMD = utils.checkFileType(filePath, typeFileRequired);
  const promise = new Promise((resolve, reject) => {
    if(isMD) {
      const handleError = (err) => {
        reject(`Ha ocurrido un error tratando de leer el archivo, ${err}`)
      }

      const successCallback = (data) => {
        getLinks(data, options, filePath)
          .then(linksArray => resolve(linksArray))
          .catch((error) => reject(`Ha ocurrido un error al leer los enlaces del archivo ${error}`))
      }
      handleFile.read(filePath, successCallback, handleError);
    } else {
      reject(`El archivo no es del tipo ${typeFileRequired}`);
    }
  });
  return promise;
}

module.exports = {
  mdLinks,
  statsLinks,
  validateLink,
  getLinks
}
