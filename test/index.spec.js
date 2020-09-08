const init = require('../index');
const mdLinks = require('../src/md-links');
const utils = require('../src/utils.js');

describe('init', () => {
  xit('Debe ser una funcion', () => {
    expect(typeof init).toBe('function');
  });

  xit('Debe retornar un error si el archivo/ruta ingresada no existe', () => {
    jest.spyOn(utils, 'fileExists').mockImplementationOnce(() => false);

    const result = init('string');

    })

    xit('Debe ejecutar mdlinks si recibe un archivo existente', () => {
      jest.spyOn(utils, 'fileExists').mockImplementationOnce(() => true);
      jest.spyOn(utils, 'isFile').mockImplementationOnce(() => true);
  
      init('string');
      mdLinks.mdLinks('sting','options')
  
      expect(mdLinks.mdLinks).toHaveBeenCalledTimes(1)
      })

  xit('Debe ejecutar mdlinks si recibe un archivo', () => {

  })
  });