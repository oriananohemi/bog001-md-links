const { resolve } = require('path');
const mdLinks = require('./src/md-links');

const file = resolve(__dirname, 'laboratoria.md');

mdLinks.mdLinks(file)
.then((res) => {
    console.log(res);
  });

  mdLinks.mdLinks(file, { validate: true})
  .then((res) => {
    console.log(res);
  })

  mdLinks.mdLinks(file, { stats: true})
  .then((res) => {
    console.log(res);
  })

  mdLinks.mdLinks(file, { validate: true, stats: true})
  .then((res) => {
    console.log(res);
  })
