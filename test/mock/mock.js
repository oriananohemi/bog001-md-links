const mockMdLinks = [
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
  }
]

const mockHref = 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e'

const mockValidate = 200

const mockMdLinksValidate = [
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
    status: 200,
    value: 'OK'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
    status: 200,
    value: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: '/home/linix/Documents/Oriana/bog001-md-links/test/mock/folderMock/prueba.md',
    status: 200,
    value: 'OK'
  }
]

const mockStats = {
  total: 3,
  unique: 3
}

const mockStatsValidate = {
  broken: 0,
  total: 3,
  unique: 3
}

const mockHtml = `
<a href="https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e">Linea de comando CLI</a>
<a href="https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e">Linea de comando CLI</a>
<a href="https://nodejs.dev/algo">Path</a>
`

const mockMdLinksError = [
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/file/path/to-file.md',
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/file/path/to-file.md',
  },
  {
    href: 'https://nodejs.dev/algo',
    text: 'Path',
    file: '/file/path/to-file.md',
  }
]

const mockMdLinksValidateError = [
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/file/path/to-file.md',
    status: 200,
    value: 'OK'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/file/path/to-file.md',
    status: 200,
    value: 'OK'
  },
  {
    href: 'https://nodejs.dev/algo',
    text: 'Path',
    file: '/file/path/to-file.md',
    status: 404,
    value: 'Fail'
  }
]

const mockMdLinksStatsError = {
  total: 3,
  unique: 1
}

const mockMdLinksStatsValidateError = {
  total: 3,
  broken: 1,
  unique: 2
}

module.exports = {
  mockMdLinks, mockHref, mockValidate, mockMdLinksValidate, mockStats, mockStatsValidate, mockHtml, mockMdLinksError, mockMdLinksStatsError, mockMdLinksValidateError,  mockMdLinksStatsValidateError
}