const mdLinks = require ('../src/md-links');
const {
  mockMdLinks,
  mockMdLinksValidate,
  mockStats,
  mockStatsValidate,
  mockHref,
  mockValidate,
  mockHtml,
  mockMdLinksError,
  mockMdLinksValidateError,
  mockMdLinksStatsError} = require('./mock/mock');
const utils = require('../src/utils');
const handleFile = require('../src/handleFile');
const prueba = `${__dirname}/mock/folderMock/prueba.md`;
jest.mock('marked');
const marked = require('marked');

describe('statsLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.statsLinks).toBe('function');
  });

  it('Si se recibe el parametro stats vamos a retornar un objeto con las key (total, unique)', () => {
    const result = mdLinks.statsLinks(mockMdLinks)
    expect(result).toEqual(mockStats);
  });

  it('Si se recibe los parametros stats y validate vamos a retornar un objeto con las key (total, unique y broke)', () => {
    const result = mdLinks.statsLinks(mockMdLinksValidate, {validate: true})
    expect(result).toEqual(mockStatsValidate);
  });
});

describe('validateLink', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.validateLink).toBe('function');
  });

  it('Si se recibe el parametro validate retorna una promesa con el codigo de respuesta', () => {
    const result = mdLinks.validateLink(mockHref)
    expect(result).resolves.toEqual(mockValidate);
  });
  it('Si se recibe el parametro validate y el archivo es un enlace interno la promesa retornara el string Es un enlace interno', () => {
    const fileInt = '#1-resumen-del-proyecto';
    const value = 'Es un enlace interno';
    const result = mdLinks.validateLink(fileInt);
    expect(result).resolves.toEqual(value);
  });
});

describe('getLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.getLinks).toBe('function');
  });
  it('Debe retornar una promesa con un arreglo de objetos', () => {
    const options = {
      validate: false,
      stats: false
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksError);
  });
  it('Debe retornar un objeto con las key unique y total', () => {
    const options = {
      validate: false,
      stats: true
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksStatsError);
  });
  it('Debe retornar una promesa con un arreglo de objetos', () => {
    const options = {
      validate: true,
      stats: false
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksValidateError);
  });
});

describe('mdlinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.  mdLinks).toBe('function');
  });

  it('Debe retornar una promesa con un arreglo de objetos si no recibe opciones', () => {
    const result = mdLinks.mdLinks(prueba);
    expect(result).resolves.toEqual(mockMdLinks)
  });

  it('Debe retornar un error si el archivo no es del tipo requerido', () => {
    jest.spyOn(utils, 'buildRoute').mockImplementationOnce(() => '');
    jest.spyOn(utils, 'checkFileType').mockImplementationOnce(() => false);

    const result = mdLinks.mdLinks('string');

    expect(result).rejects.toMatch('error')
  });
  it('Debe ejecutar la funcion read si el archivo es del tipo markdown', () => {
    jest.spyOn(utils, 'buildRoute').mockImplementationOnce(() => '');
    jest.spyOn(utils, 'checkFileType').mockImplementationOnce(() => true);
    jest.spyOn(handleFile, 'read').mockImplementationOnce(() => {});

    mdLinks.mdLinks('string');

    expect(handleFile.read).toHaveBeenCalled()

  });
});