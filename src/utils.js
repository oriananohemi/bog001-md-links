const buildRoute = (path) => {
  return path;
}

const checkFileType = (pathName, extention) => {
  const fileType = pathName.split('.').reverse()[0];
  return fileType === extention;
}

module.exports = {
  checkFileType,
  buildRoute
}