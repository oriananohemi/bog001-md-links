const pathModule = require('path');
const fs = require('fs');
const buildRoute = (path) => {
  let absoluteRoute;
  if(fs.Stats(path).isFile()) {
    absoluteRoute = pathModule.resolve(path);
    console.log('hola')
  } else {
    let directories = path.dirname(path)
    console.log(directories)
  }
  return absoluteRoute;
}

const checkFileType = (pathName, extention) => {
  // const fileType = pathName.split('.').reverse()[0];
  const fileType = pathModule.extname(pathName)
  return fileType === extention;
}

// const codeMeaning = {
//   200: 'OK',
//   400: 'Bad Request',
//   404: 'Not Found'
// }

module.exports = {
  checkFileType,
  buildRoute,
  // codeMeaning,
}