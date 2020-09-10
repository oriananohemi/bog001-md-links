const fs = require('fs');
const utils = require('./utils.js');
const { mdLinks } = require('./md-links');
const path = require('path');

const TYPE_FILE_REQUIRED = '.md';

const fileNamePath = process.argv[2];
const flag1 = process.argv[3];
const flag2 = process.argv[4];
const options = {
  validate: flag1 === '--validate' || flag2 === '--validate'  ? true : false,
  stats: flag2 === '--stats' || flag1 === '--stats' ? true : false
}

const init = (filePath) => {
  if(utils.fileExists(filePath)) {
    const isFile = utils.isFile(filePath);
    if(isFile) {
      mdLinks(filePath, options).then((links) => {
        if(links.length === 0) {
          console.log('El archivo no contiene enlaces')
        } else {
          console.log(links)
        }
      }).catch(console.error)
    } else {
      const files = fs.readdirSync(filePath);
      const mdFiles = files.filter(file => utils.checkFileType(file, TYPE_FILE_REQUIRED))
      mdFiles.forEach(file => {
        const dirname = path.join(filePath , file);
        mdLinks(dirname, options).then((links) => {
          if(links.length === 0) {
            console.log(`El archivo que ingresaste no contiene enlaces`)
          } else {
            console.log(links)
          }
        }).catch(console.error)
      })
    }
  } else {
    console.error('Revise la ruta ingresada, el archivo no ha sido encontrado')
  }
}

init(fileNamePath)

module.exports = init;