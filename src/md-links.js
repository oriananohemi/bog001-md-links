// const codeMeaning = require('./utils');
const http = require('http');
const https = require('https');
const marked = require('marked');

const statsLinks = (elementHref) => {
  const links = [];
  if(links.length = 0) {
    links.push(elementHref);
  } else {
    links.forEach(link => {
      if(link !== elementHref) {
        links.push(elementHref)
      }
    })
  }
  const linksUnique = links.length;
  return linksUnique;
}

// const code = (number) => {
//   const codeNumber = codeMeaning[number];
//   return codeNumber;
// }

const validateLinks = (elementHref) => {
  const url = new URL(elementHref);
  const client = url.protocol === "https:" ? https : http;
  const promise = new Promise((resolver) => {
    client.get(url.href, (res) => {
      resolver(res.statusCode);
    }).on('error', (error) => {
      console.error(error);
    });
  });
  return promise;
}

const mdLinks = async (fileMD, options, filePath) => {
  const links = [];
  const fileHTML = marked(fileMD);

  const link = fileHTML.split('href=');

  link.shift()

  link.forEach(async element => {
    const href = element.split(element[0])[1];
    const text1 = element.split('>')[1];
    const text2 = text1.split('</a>')[0]

    const linkInfo = {
      href: href,
      text: text2,
      file: filePath
    }

    if(options.validate) {
      linkInfo.status = await validateLinks(href);
    }
    if(options.stats) {
      statsLinks(href)
    }
    links.push(linkInfo);
    // console.log(links)
  });
}


module.exports = {
  mdLinks
}