const utils = require('./src/utils.js');
const handleFile = require('./src/handleFile.js');
const fileOperator = require('./src/md-links');

const fileNamePath = process.argv[2];
const typeFileRequired = 'md';

const init = () => {
  const isMD = utils.checkFileType(fileNamePath, typeFileRequired);
  if(isMD) {
    const filePath = utils.buildRoute(fileNamePath);
    const flag1 = process.argv[3];
    const flag2 = process.argv[4];
    const options = { 
      validate: flag1 || flag2 === '--validate' ? true : false,
      stats: flag1 || flag2 === '--stats' ? true : false
     }
    handleFile.read(filePath, (data) => {fileOperator.mdLinks(data, options)}, console.error)
  } else {
    console.log(`El archivo no es de tipo ${typeFileRequired}`)
  }
}

init()
