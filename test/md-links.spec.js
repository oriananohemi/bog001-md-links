const statsLinks = require ('../src/md-links');
const validateLink = require('../src/md-links');
const getLinks = require('../src/md-links');
const mdLinks = require('../src/md-links');

describe('statsLinks', () => {

  it('Debe ser una funcion', () => {
    expect(typeof statsLinks).toBe('function');
  });

});

describe('validateLink', () => {

  it('Debe ser una funcion', () => {
    expect(typeof validateLink).toBe('function');
  });

});

describe('getLinks', () => {

  it('Debe ser una funcion', () => {
    expect(typeof getLinks).toBe('function');
  });
});

describe('mdLinks', () => {

  it('Debe ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

});
