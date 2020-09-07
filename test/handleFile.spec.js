const read = require('../src/handleFile');
const fs = require('fs');

describe('read', () => {
  it('Debe ser una funcion', () => {
    expect(typeof read).toBe('function');
  });

  it('Debe ejecutar el errorCallback si no puede leer el archivo', () => {
    const error = 'Mensaje de error';
    const handleError = jest.fn();
    jest.spyOn(fs, 'readFile').mockImplementationOnce((path, cb) => cb(error));

    read('prueba.md', () => {}, handleError);

    expect(handleError).toHaveBeenCalledWith(error);

  });
  it('Debe ejecutar el successCallback si la lectura del archivo es exitosa', () => {
    const success = 'Success';
    const successCallback = jest.fn();
    jest.spyOn(fs, 'readFile').mockImplementationOnce((path, cb) => cb(null, Buffer.from(success)));

    read('prueba.md',successCallback, () => {});

    expect(successCallback).toHaveBeenCalledWith(success);
  });
});
