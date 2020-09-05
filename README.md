# MD-links Instrucciones

Libreria que permite extraer todos los enlaces dentro de un archivo de tipo Markdown, identificar cuales son los codigos de respuesta de las consultas, realizar estadisticas: cuantos enlaces estan rotos, cuales son unicos, cuantos hay en total

## Instalar CLI

  <kbd>
      $ npm install -g @oriananohemi/md-links
  </kbd>

## USO CLI
  Recibe como argumento un archivo ".md" o una carpeta que contenga un archivo ".md".

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