const fs = require('fs');
const marked = require('marked')

const read = (ruta, successCallback, errorCallback) => {
  fs.readFile(ruta, (err, data) => {
    if(err) {
      errorCallback(err)
    } else {
      const mdToHtml = marked(data.toString())
      successCallback(mdToHtml)
    }
    })
}

module.exports = {
  read
}
