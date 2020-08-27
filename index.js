const checkFileType = require('./src/utils.js');
const readFile = require('./src/handleFile.js');

const filePath = process.argv[2];
const typeFileRequired = 'md'

const init = () => {
  const isMD = checkFileType(filePath, typeFileRequired);
  if(isMD) {
    readFile(filePath, console.log, console.log)
  } else {
    console.log(`El archivo no es de tipo ${typeFileRequired}`)
  }
}

init()
