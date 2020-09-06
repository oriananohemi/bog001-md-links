const mockMdLinks = [
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: '/home/linix/Documents/Oriana/bog001-md-links/prueba.md',
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: '/home/linix/Documents/Oriana/bog001-md-links/prueba.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    file: '/home/linix/Documents/Oriana/bog001-md-links/prueba.md',
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

module.exports = {
  mockMdLinks, mockHref, mockValidate, mockMdLinksValidate, mockStats, mockStatsValidate
}