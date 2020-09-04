const mdLinks = require ('../src/md-links');

describe('statsLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.statsLinks).toBe('function');
  });
  it('Si se recibe el parametro validate vamos a retornar un objeto con las key (total, unique)', () => {
    expect(mdLinks.statsLinks()).toEqual('{}');
  });
  // it('Debe ser una funcion', () => {
  //   expect(typeof validateLink).toBe('function');
  // });

});

// describe('validateLink', () => {

//   it('Debe ser una funcion', () => {
//     expect(typeof validateLink).toBe('function');
//   });

// });

// describe('getLinks', () => {

//   it('Debe ser una funcion', () => {
//     expect(typeof getLinks).toBe('function');
//   });
// });

// describe('mdLinks', () => {

//   it('Debe ser una funcion', () => {
//     expect(typeof mdLinks).toBe('function');
//   });

// });
