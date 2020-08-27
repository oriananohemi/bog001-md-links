const fs = require('fs');

module.exports = (ruta, successCallback, errorCallback) => {
  fs.readFile(ruta, (err, data) => {
    if(err) {
      errorCallback(err)
    } else {
      console.log(data.toString())
      successCallback(data.toString())
    }
    })
}