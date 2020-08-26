const fs = require('fs');
const { dirname } = require('path');

const enter = (ruta, callback) => {
  fs.readFile(ruta, (err, data) => {
    callback(data.toString())
  })
}

enter(__dirname + '/README.md', console.log)