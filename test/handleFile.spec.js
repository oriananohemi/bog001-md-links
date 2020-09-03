const read = require('../src/handleFile');

describe('read', () => {
  it('Debe ser una funcion', () => {
    expect(typeof read).toBe('function');
  });
})

