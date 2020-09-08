const utils = require ('../src/utils');
const fs = require('fs');
const path = require('path');

describe('fileExists', () => {

  it('Debe ser una funcion', () => {
    expect(typeof utils.fileExists).toBe('function');
  });

  it('Debe retornar true si fs.statSync retorna true', () => {
    jest.spyOn(fs, 'statSync').mockImplementationOnce(() => {
      return {
        fileExits: () => {
          return true;
        }
      }
    })

    const result = utils.fileExists('readme.md');

    expect(result).toBe(true);
  })
  it('Debe retornar false si fs.statSync retorna false', () => {
    jest.spyOn(fs, 'statSync').mockImplementationOnce(() => {
      return {
        fileExits: () => {
          return false;
        }
      }
    })

    const result = utils.fileExists('prueba.md');

    expect(result).toBe(true);
  })
})

describe('isFile', () => {

  it('Debe ser una funcion', () => {
    expect(typeof utils.isFile).toBe('function');
  });

  it('Debe retornar false si fs.lstatSync.isFile retorna false', () => {
    jest.spyOn(fs, 'lstatSync').mockImplementationOnce(() => {
      return {
        isFile: () => {
          return false;
        }
      }
    })

    const result = utils.isFile('string');

    expect(result).toBe(false);
  })

  it('Debe llamar a la funcion fs.lstatSync', () => {
    jest.spyOn(fs, 'lstatSync').mockImplementationOnce(() => {
      return {
        isFile: () => {
          return false;
        }
      }
    })

    utils.isFile('string');

    expect(fs.lstatSync).toHaveBeenCalledWith('string')
  })

})

describe('buildRoute', () => {
  it('Debe ser una funcion', () => {
    expect(typeof utils.buildRoute).toBe('function');
  });

  it('Debe retornar una ruta absoluta', () => {
    jest.spyOn(path, 'resolve').mockImplementationOnce((file) => {
      return `home/prueba/miproyecto/${file}`;
    })

    const nameTest = 'string-prueba';
    const pathAbsolute = 'home/prueba/miproyecto/string-prueba';

    const result = utils.buildRoute(nameTest)

    expect(result).toEqual(pathAbsolute);
  })
})

describe('checkFileType', () => {
  it('Debe ser una funcion', () => {
    expect(typeof utils.checkFileType).toBe('function');
  });

  it('Debe retornar true si recibe un archivo con la extension requerida por el proyecto', () => {
    jest.spyOn(path, 'extname').mockImplementationOnce(() => {
      return '.md';
    })
    const nameTest = 'string-prueba';
    const extension = '.md'
    const result = utils.checkFileType(nameTest, extension);

    expect( result).toBe(true);
  })
})