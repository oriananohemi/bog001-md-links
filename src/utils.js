module.exports = (path, extention) => {
  const fileType = path.split('.').reverse()[0];
  return fileType === extention;
}