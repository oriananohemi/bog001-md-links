// import mdLinks from './src/md-links';

const fs = require('fs');
// const { dirname } = require('path');
const filePath = process.argv[2];

const receiveFile = (ruta, callback) => {

  fs.readFile(ruta, (err, data) => {
    callback(data.toString())
    })
}
const checkFileType = () => {
  const fileType = filePath.split('.').reverse()[0];
  if(fileType === 'md') {
    receiveFile(__dirname + '/' + filePath, console.log)
    console.log(process)
  } else {
    console.log('El archivo no es tipo Markdown')
  }
}

checkFileType()
