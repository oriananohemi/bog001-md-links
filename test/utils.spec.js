const isFile = require ('../src/utils');
const buildRoute = require('../src/utils');
const checkFileType = require('../src/utils');

describe('isFile', () => {
  it('Debe ser una funcion', () => {
    expect(typeof isFile).toBe('function');
  });
  // if('Debe retornarme false si recibe un directorio', () => {
  // })
})

describe('buildRoute', () => {
  it('Debe ser una funcion', () => {
    expect(typeof buildRoute).toBe('function');
  });
  // if('Debe retornar una ruta absoluta', () => {
  // })
})

describe('checkFileType', () => {
  it('Debe ser una funcion', () => {
    expect(typeof checkFileType).toBe('function');
  });
  // if('Debe retornar true si recibe un archivo con la extension requerida por el proyecto', () => {
  // })
})