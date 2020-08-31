const fs = require('fs');
const utils = require('./src/utils.js');
const mdLinks = require('./src/md-links');
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
  const isFile = utils.isFile(fileNamePath);
  if(isFile) {
    mdLinks(filePath, options)
  } else {
    const files = fs.readdirSync(fileNamePath);
    const mdFiles = files.filter(file => utils.checkFileType(file, TYPE_FILE_REQUIRED))
    mdFiles.forEach(file => {
      const dirname = path.join(filePath , file);
      mdLinks(dirname, options)
    })
  }
}

init(fileNamePath)
