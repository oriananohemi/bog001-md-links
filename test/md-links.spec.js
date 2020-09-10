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
  mockMdLinksStatsError,
  mockMdLinksStatsValidateError} = require('./mock/mock');
const utils = require('../src/utils');
const handleFile = require('../src/handleFile');
const prueba = `${__dirname}/mock/folderMock/prueba.md`;

jest.mock('marked');
const marked = require('marked');

describe('statsLinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.statsLinks).toBe('function');
  });

  it('Debe retornar un objeto con el total de enlaces y los enlaces unicos', () => {
    const result = mdLinks.statsLinks(mockMdLinks)
    expect(result).toEqual(mockStats);
  });

  it('Debe retornar un objeto con el total de enlaces, la cantidad de enlaces rotos y los enlaces unicos', () => {
    const result = mdLinks.statsLinks(mockMdLinksValidate, {validate: true})
    expect(result).toEqual(mockStatsValidate);
  });
});

describe('validateLink', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.validateLink).toBe('function');
  });

  it('Debe retornar una promesa que cuando se resuelva contenga los codigos de respuesta de los enlaces', () => {
    const result = mdLinks.validateLink(mockHref)
    expect(result).resolves.toEqual(mockValidate);
  });

  it('Debe retornar una promesa que cuando se resuelva contenga el string Es un enlace interno', () => {
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
  it('Debe retornar una promesa que cuando se resuelva contenga un arreglo de objeto con el href, el file y el texto', () => {
    const options = {
      validate: false,
      stats: false
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksError);
  });
  it('Debe retornar una promesa que cuando se resuelva contenga un objeto con la cantidad de enlaces y la cantidad de enlaces unicos', () => {
    const options = {
      validate: false,
      stats: true
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksStatsError);
  });
  it('Debe retornar una promesa que cuando se resuelva contenga un objeto con el href, el file, el texto y el status del enlace', () => {
    const options = {
      validate: true,
      stats: false
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksValidateError);
  });
  it('Debe retornar una promesa que cuando se resuelva contenga un objeto con la cantidad de enlaces, la cantidad de enlaces unicos y la cantidad de enlaces rotos', () => {
    const options = {
      validate: true,
      stats: true
    }
    marked.mockReturnValue(mockHtml);
    const result = mdLinks.getLinks('', options, '/file/path/to-file.md');
    expect(result).resolves.toEqual(mockMdLinksStatsValidateError);
});
  });

describe('mdlinks', () => {
  it('Debe ser una funcion', () => {
    expect(typeof mdLinks.  mdLinks).toBe('function');
  });

  it('Debe retornar un error si el archivo no es del tipo requerido', () => {
    jest.spyOn(utils, 'buildRoute').mockImplementationOnce(() => '');
    jest.spyOn(utils, 'checkFileType').mockImplementationOnce(() => false);

    const result = mdLinks.mdLinks('string');

    expect(result).rejects.toMatch('El archivo no es del tipo .md')
  });
  it('Debe ejecutar la funcion read si el archivo es del tipo markdown', () => {
    jest.spyOn(utils, 'buildRoute').mockImplementationOnce(() => '');
    jest.spyOn(utils, 'checkFileType').mockImplementationOnce(() => true);
    jest.spyOn(handleFile, 'read').mockImplementationOnce(() => {});

    mdLinks.mdLinks('string');

    expect(handleFile.read).toHaveBeenCalled()

  });
});