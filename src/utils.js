const path = require('path');
const fs = require('fs');

const isFile = (pathName) => {
  const isFile = fs.lstatSync(pathName).isFile();
  return isFile
}

const buildRoute = (pathName) => {
  const absoluteRoute = path.resolve(pathName);
  return absoluteRoute;
}

const checkFileType = (pathName, extention) => {
  // const fileType = pathName.split('.').reverse()[0];
  const fileType = path.extname(pathName)
  return fileType === extention;
}

// const codeMeaning = {
//   200: 'OK',
//   400: 'Bad Request',
//   404: 'Not Found'
// }

module.exports = {
  isFile,
  checkFileType,
  buildRoute,
  // codeMeaning,
}