const { mdlinks } = require('@oriananohemi/md-links/src/md-links');
console.log(mdlinks)

// const file = 'laboratoria.md'

// mdlinks(file)
//   .then((res) => {
//     console.log(res)
//   })

const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  mdlinks(input.value)
  .then(links => {
    console.log(links)
  })
  .catch(console.error)
})
