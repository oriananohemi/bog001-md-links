# MD-links Instrucciones

Libreria que permite extraer todos los enlaces dentro de un archivo de tipo Markdown, identificar cuales son los codigos de respuesta de las consultas, realizar estadisticas: cuantos enlaces estan rotos, cuales son unicos, cuantos hay en total

## Instalar CLI

  <kbd>
      $ npm install -g @oriananohemi/md-links
  </kbd>

## Uso CLI
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

## Instalar como Modulo


Github Packages
  <kbd>
      $ npm install oriananohemi/md-links
  </kbd>

NPM
  <kbd>
      $ npm install @oriananohemi/md-links
  </kbd>

## Uso del Modulo

  <kbd>
      const mdlinks = require('md-links')
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