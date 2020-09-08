# Markdown Links 💻

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Instrucciones](#2-instrucciones)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Checklist](#5-checklist)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Instrucciones

### Diagrama de Flujo
<img src="./Screenshot from 2020-09-03 21-39-56.png">

<a href="https://www.npmjs.com/~oriananohemi">npmjs</a>

### Instrucciones

### Instalar CLI

  <kbd>
      $ npm install -g @oriananohemi/md-links
  </kbd>

### Uso CLI
  Recibe como argumento un archivo ".md" o una carpeta que contenga un archivo ".md".

  **Al ejecutar el comando, te imprime un arreglo de objetos con las url, la referencia dada al enlace, el archivo donde se encontro el enlace**

  <kbd>
    $ mdlinks README.md
  </kbd>

 ```
    {
      href: 'http://algo.com/2/3/',
      text: 'Link a algo',
      file: './some/example.md'
    },
    {
      href: 'http://google.com/',
      text: 'Google',
      file: './some/example.md'
    }
    {
      href: 'https://nodejs.dev/',
      text: 'Node JS',
      file: './some/example.md'
    }
  ```

  **Si ejecutas el comando con la bandera --validate, verifica el status de los links**

  <kbd>
    $ mdlinks README.md --validate
  </kbd>

 ```
    {
      href: 'http://algo.com/2/3/',
      text: 'Link a algo',
      file: './some/example.md',
      status: 404,
      value: 'FAIL'
    },
    {
      href: 'http://google.com/',
      text: 'Google',
      file: './some/example.md',
      status: 200,
      value: 'OK'
    }
    {
      href: 'https://nodejs.dev/',
      text: 'Node JS',
      file: './some/example.md',
      status: 200,
      value: 'OK'
    }
  ```
  **Si ejecutas el comando con la bandera --stats, te muestra cuantos enlaces hay en total y cuantos son unicos**

  <kbd>
    $ mdlinks README.md --stats
  </kbd>

 ```
  Total: 3,
  Unique: 3
 ```

  **Si ejecutas el comando con la bandera --validate --stats, verifica el status de los links y te imprime cuantos enlaces hay en total, cuantos son unicos y cuantos estan rotos**

   <kbd>
    $ mdlinks README.md --validate --stats
  </kbd>

 ```
  Total: 3,
  Unique: 3,
  Broken: 1
 ```

### Instalar como Modulo

  <kbd>
      $ npm install @oriananohemi/md-links
  </kbd>

### Uso del Modulo

  <kbd>
      const mdlinks = require('@oriananohemi/md-links)
  </kbd>

  **Devuelve un arreglo de objetos con las url, la referencia dada al enlace, el archivo donde se encontro el enlace**
```
mdlinks('./README.md')
  .then((res) => {
    console.log(res);
  })
```
  **Devuelve un arreglo de objetos con las url, la referencia dada al enlace, el archivo donde se encontro el enlace y verifica cada uno de los links, imprimiendo tambien el codigo de la respuesta**
```
mdlinks('./README.md', { validate: true})
  .then((res) => {
    console.log(res);
  })
```
  **Devuelve las estadisticas de los enlaces encontrados en el archivo, cuantos hay en total y cuantos son unicos**
```
mdlinks('./README.md', { stats: true})
  .then((res) => {
    console.log(res);
  })
```
  **Devuelve las estadisticas de los enlaces encontrados en el archivo, cuantos hay en total, cuantos son unicos y cuales estan rotos**
```
mdlinks('./README.md', { validate: true, stats: true})
  .then((res) => {
    console.log(res);
  })
```

## 3. Resumen del proyecto

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

## 4. Objetivos de aprendizaje

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

* [x] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [x] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [x] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [x] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [x] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
* [x] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [x] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [x] Uso de Mocks manuales.
* [x] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [x] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

* [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***

## 5. Checklist

### General

* [x] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [x] Un board con el backlog para la implementación de la librería.
* [x] Documentación técnica de la librería.
* [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [ ] El módulo exporta una función con la interfaz (API) esperada.
* [ ] Implementa soporte para archivo individual
* [ ] Implementa soporte para directorios
* [ ] Implementa `options.validate`

### CLI

* [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [x] Se ejecuta sin errores / output esperado
* [x] Implementa `--validate`
* [x] Implementa `--stats`

### Pruebas / tests

* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [x] Pasa tests (y linters) (`npm test`).
