# POKEDEX-CODE <img src="https://github.com/oriananohemi/BOG001-data-lovers/blob/master/src/image/Rectangle%201.png">

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivo de la página](#2-objetivo-de-la-pagina)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipo de baja fidelidad](#4-prototipo-de-baja-fidelidad)
* [5. Prototipo de alta fidelidad](#5-prototipo-de-alta-fidelidad)
* [6. Feedback](#6-feedback)
* [7. Hacker edition](#7-hacker-edition)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Checklist](#9-checklist)

***

## 1. Resumen del proyecto

En este proyecto **Pokedex-Code** podras visualizar por medio de **Cards** los primeros 151 Pokemones de la región de Kanto y Johto con sus respectivas características usadas en el juego **Pokemon-GO**. En esta página web podras **visualizar** los Pokemones, **filtrarlos por tipo** (veneno, agua, fuego, lucha, roca, entre otros), **ordenarlos** de forma ascendente y descendente, además de visualizar datos como **promedios y gráficas**.

**Demo del Proyecto**
https://oriananohemi.github.io/BOG001-data-lovers/


## 2. Objetivo de la página

Es una página web enfocada en un **usuario** que quiera conocer acerca de los diferentes Pokemones que existen y sus caracteristicas. Es una página fácil de usar, intuitiva y entendible para el usuario. 

## 3. Historias de usuario

**Historia 1**
-Usuario: Jugador de Pokemon Go;
-Necesita: Visualizar los Pokemones disponibles en el juego;
-Para: Poder saber los pokemones que tiene su pokedex;

**Historia 2**
-Usuario: Jugador de Pokemon Go;
-Necesita: Filtrar los pokemones por tipo;
-Para: Poder ganar combates;

**Historia 3**
-Usuario: Jugador de Pokemon Go;
-Necesita: Ordenar los pokemones;
-Para: Poder visualizar los diferentes pokemones;

**Historia 4**
-Usuario: Jugador de Pokemon Go;
-Necesita: Visualizar promedios de altura y peso; 
-Para: Obtener datos estadisticos;

**Historia 5**
-Usuario: Jugador de Pokemon Go;
-Necesita: Visualizar las cantidades de pokemones por tipo;
-Para: Saber las cantidades de pokemones que tiene por tipo;

## 4. Prototipo de baja fidelidad

![](imgReadme/ProtoBaja_pantalla_inicial.jpg)

![](imgReadme/ProtoBaja_visualizacion_card.jpg)

![](imgReadme/ProtoBaja_cel.jpg)

## 5. Prototipo de alta fidelidad

El prototipo de alta fidelidad se realizo en Figma

**Link Pototipo En Figma** 
https://www.figma.com/file/hY1jmIMkONC7RzPzyUpz4P/Untitled?node-id=0%3A1

![](imgReadme/Pagina1.png)

![](imgReadme/VistaCard.png)

![](imgReadme/Pag1_cel.png)

![](imgReadme/Pag2_cel.png)

## 6. Feedback

Entre las mejoras recibidas en el feedback, se pedia que en el cambio de pagina donde se visualizaban los pokemones, al presionar los botones anterior o siguiente no fuera necesario hacer Scroll para visualizar los primeros pokemones cargados en la página sino que lo realizára de forma automatica.

## 7. Hacker Edition

1. La data se consumio de forma dinámica, cargando un archivo JSON por medio de fetch.

2. Se implemento la libreria [Chart.js](https://www.chartjs.org/) para visualizar por medio de una gráfica tipo Pie la cantidad de pokemones por tipo.

3. Los resultados obtenidos de testing con Jest son:

![](imgReadme/CaptureTest.PNG)

## 8. Objetivos de aprendizaje

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 9. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin o Figma en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
