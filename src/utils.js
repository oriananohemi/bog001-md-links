const path = require('path');
const fs = require('fs');

const fileExists = (pathName) => {
  try {
    fs.statSync(pathName);
    return true;
  } catch(err) {
    if (err.code === 'ENOENT') {
      return false;
    }
  }
}

const isFile = (pathName) => {
  const isFile = fs.lstatSync(pathName).isFile();
  return isFile;
}

const buildRoute = (pathName) => {
  const absoluteRoute = path.resolve(pathName);
  return absoluteRoute;
}

const checkFileType = (pathName, extention) => {
  // const fileType = pathName.split('.').reverse()[0];
  const fileType = path.extname(pathName);
  return fileType === extention;
}

module.exports = {
  fileExists,
  isFile,
  checkFileType,
  buildRoute,
}