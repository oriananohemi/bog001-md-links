const http = require('http');
const https = require('https');
const marked = require('marked');

const statsLinks = (elementHref) => {
  // console.log(elementHref)
}

const validateLinks = (elementHref) => {
  const url = new URL(elementHref);
  let client = url.protocol === "https:" ? https : http;
  client.get(url.href, (res) => {
    console.log(res.statusCode)
  })
}

const mdLinks = (fileMD, options, filePath) => {
  const links = [];
  const fileHTML = marked(fileMD);

  const link = fileHTML.split('href=');
  
  link.shift()
  
  link.forEach(element => {
    const href = element.split(element[0])[1];
    const text1 = element.split('>')[1];
    const text2 = text1.split('</a>')[0]
    
    const linkInfo = {
      href: href,
      text: text2,
      file: filePath
    }
    
    if(options.validate) {
      validateLinks(href)
    }
    if(options.stats) {
      statsLinks(href)
    }
    links.push(linkInfo);
  });
}


module.exports = {
  mdLinks
}