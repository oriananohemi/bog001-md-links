const mdLinks = require ('../src/md-links');
const {mockMdLinks, mockMdLinksValidate, mockStats, mockStatsValidate, mockHref, mockValidate} = require('./mock/mock');
const prueba = `${__dirname}/mock/folderMock/prueba.md`;

describe('statsLinks', () => {

  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.statsLinks).toBe('function');
  });

  it('Si se recibe el parametro stats vamos a retornar un objeto con las key (total, unique)', () => {
    expect(mdLinks.statsLinks(mockMdLinks)).toEqual(mockStats);
  });
});

describe('mdLinks', () => {

  it('Si se recibe el parametro stats vamos a retornar un objeto con las key (total, unique)', () => {
    expect(mdLinks.mdLinks(prueba, {stats: true})).resolves.toEqual(mockStats);
  });
});

describe('validateLink', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.validateLink).toBe('function');
  });
  it('Si se recibe el parametro validate vamos a retornar un arreglo de objetos con la url, el texto y el archivo donde se encuentra el enlace', () => {
    // expect.assettions(1)
    console.log(mockHref)
    expect(mdLinks.validateLink(mockHref)).resolves.toEqual(mockValidate);
  });
});

describe('validate como parametro de mdlinks', () => {
  it('Si se recibe el parametro validate vamos a retornar un arreglo de objetos con la url, el texto y el archivo donde se encuentra el enlace', () => {
    expect(mdLinks.mdLinks(prueba, {validate: true})).resolves.toEqual(mockMdLinksValidate);
  });
});

describe('getLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.getLinks).toBe('function');
  });
});

describe('validate y stats como parametro de mdlinks', () => {
  it('Si se recibe los parametros stats y validate vamos a retornar un objeto con las key (total, unique y broke)', () => {
    expect(mdLinks.mdLinks(prueba, {stats: true, validate: true})).resolves.toEqual(mockStatsValidate);
  });
});

describe('mdLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.mdLinks).toBe('function');
  });
});
