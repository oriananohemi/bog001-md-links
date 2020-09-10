const init = require('../src/index');
let mdLinks = require('../src/md-links');
const utils = require('../src/utils.js');

describe('init', () => {
  it('Debe ser una funcion', () => {
    expect(typeof init).toBe('function');
  });

  it('Debe ejecutar el error si el archivo no existe', () => {
    jest.spyOn(utils, 'fileExists').mockImplementationOnce(() => false);
    console.error = jest.fn()
    init('string');

    expect(console.error).toHaveBeenCalledWith('Revise la ruta ingresada, el archivo no ha sido encontrado')
  });

});