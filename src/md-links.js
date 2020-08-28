const optionsLinks = (options) => {
  if(options === '--stats') {

  }
}

const mdLinks = (data, options) => {
  const links = [];

  const link = data.split('href=');
  link.shift()
  link.forEach(element => {
    const href = element.split(element[0])[1];
    const text1 = element.split('>')[1];
    const text2 = text1.split('<')[0]

    const linkInfo = {
      href: href,
      text: text2
    }
    links.push(linkInfo);
  });
  console.log(links)
}


module.exports = {
  mdLinks
}