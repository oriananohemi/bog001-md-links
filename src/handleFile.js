const fs = require('fs');

const read = (ruta, successCallback, errorCallback) => {
  fs.readFile(ruta, (err, data) => {
    if(err) {
      errorCallback(err)
    } else {
      successCallback(data.toString())
    }
    })
}

module.exports = read;
