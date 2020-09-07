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

  it('Si se recibe los parametros stats y validate vamos a retornar un objeto con las key (total, unique y broke)', () => {
    expect(mdLinks.statsLinks(mockMdLinksValidate, {validate: true})).toEqual(mockStatsValidate);
  });
});

describe('validateLink', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.validateLink).toBe('function');
  });

  it('Si se recibe el parametro validate retorna una promesa con el codigo de respuesta', () => {
    expect(mdLinks.validateLink(mockHref)).resolves.toEqual(mockValidate);
  });
  it('Si se recibe el parametro validate y el archivo es un enlace interno la promesa retornara el string Es un enlace interno', () => {
    const fileInt = '#1-resumen-del-proyecto';
    const value = 'Es un enlace interno';
    expect(mdLinks.validateLink(fileInt)).resolves.toEqual(value);
  });
});

describe('getLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.getLinks).toBe('function');
  });
});

describe('mdlinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.mdLinks).toBe('function');
  });

  it('Si se recibe los parametros stats y validate vamos a retornar un objeto con las key (total, unique y broke)', () => {
    expect(mdLinks.mdLinks(prueba, {stats: true, validate: true})).resolves.toEqual(mockStatsValidate);
  });

  it('Si se recibe el parametro stats vamos a retornar un objeto con las key (total, unique)', () => {
    expect(mdLinks.mdLinks(prueba, {stats: true})).resolves.toEqual(mockStats);
  });
});

it('Si se recibe el parametro validate vamos a retornar un arreglo de objetos con la url, el texto y el archivo donde se encuentra el enlace', () => {
    expect(mdLinks.mdLinks(prueba, {validate: true})).resolves.toEqual(mockMdLinksValidate);
  });