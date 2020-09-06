const read = require('../src/handleFile');

describe('read', () => {
  const pathAbsolute = '/home/linix/Documents/Oriana/bog001-md-links/dataLover.md';
  const handleError = (err) => {
    console.error(err);
  }
  const successCallback = () => {
    console.log('entro');
  }
  it('Debe ser una funcion', () => {
    expect(typeof read).toBe('function');
  });
  it('Debe ejecutar un errorCallback si no puede leer el archivo', () => {
    expect(read(pathAbsolute, handleError, successCallback)).toEqual(handleError());
  });
})

