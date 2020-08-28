const utils = require('./src/utils.js');
const handleFile = require('./src/handleFile.js');
const fileOperator = require('./src/md-links');

const fileNamePath = process.argv[2];
const typeFileRequired = 'md';

const handleError = (err) => {
  console.err(`Ha ocurrido un error tratando de leer el archivo, ${err}`)
}

// const handleSuccess = (data, options) => {
//   fileOperator.mdLinks(data, options)
// }

const init = () => {
  const isMD = utils.checkFileType(fileNamePath, typeFileRequired);
  if(isMD) {
    const filePath = utils.buildRoute(fileNamePath);

    const flag1 = process.argv[3];
    const flag2 = process.argv[4];
    const options = {
      validate: flag1 === '--validate' || flag2 === '--validate'  ? true : false,
      stats: flag2 === '--stats' || flag1 === '--stats' ? true : false
    }

    handleFile.read(filePath, (data) => { fileOperator.mdLinks(data, options, filePath) }, (err) =>{ handleError(err) })

  } else {
    console.log(`El archivo no es de tipo ${typeFileRequired}`)
  }
}

init()
