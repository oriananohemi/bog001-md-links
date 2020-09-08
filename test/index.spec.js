const init = require('../index');
const mdLinks = require('../src/md-links');
const utils = require('../src/utils.js');

describe('init', () => {
  it('Debe ser una funcion', () => {
    expect(typeof init).toBe('function');
  });
  });