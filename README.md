# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. User Experience Design](#2-user-experience-design)
* [3. Planning](#3-planning)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)

***

## 1. Resumen del proyecto

Wikilol una aplicación fácil, cómoda y sencilla que permite a lxs jugadorxs principiantes que estén interesadxs en ingresar al mundo de League of Legends.

Para la construcción de este proyecto se analizó el conjunto de datos y se eligieron los más importantes para que Wikilol se convierta en la aplicación ideal de un invocadorx, a la hora de elegir a los campeones que le ayudarán a ganar las partidas.

Según la investigación que realizamos, concluimos que además de conocer las características principales, consideramos muy importante que quienes quieran iniciarse en el juego deben identificar plenamente el rol de cada uno
de los campeones y esto lo pueden lograr gracias a Wikilol.


## 2. User Experience Design 

### Definición del producto
Wikilol una aplicación dirigida a todxs quienes quieran iniciarse como jugadorxs de League of Legends. Esta herramienta permite conocer las principales características y roles de los campeones. 

### Etapas UX

### I. Research (Descubrimiento e Investigación)

**Búsqueda en la web**

El MOBA League of Legends de Riot Games sigue en las primeras posiciones de los juegos free-to-play que más dinero generan, siendo las ganancias para el 2019 de 1.5 mil millones de dólares. En septiembre del 2019 [Riot Games](https://bolavip.com/gamer/Encuesta-revela-que-el-71-de-los-jugadores-de-League-of-Legends-estan-solteros-20200213-0047.html) revelaba que "cada día hay un pico de ocho millones de jugadores en simultaneo en League, que hacen de League of Legends el juego de PC más grande del mundo" y que el rango de edades de sus jugadores es de 18 a 30 años, siendo el 87% varones. 

![estadistica](https://user-images.githubusercontent.com/60791638/78627539-51516c80-7857-11ea-83ef-ad51c1014923.png)

Para iniciarse en el juego y convertirse en **invocador@** de **League of Legends** es de vital importancia conocer y elegir a los campeones estratégicamente, esto con la finalidad de ganar las partidas y sobre todo divertirse. Como el universo de LOL es enorme y cuenta con más de 140 campeones,  hemos creado la aplicación **WIKILOL**, aquí podrán conocer los roles y características más importantes de todos los campeones.

**Sondeo:**

El sondeo fue realizado el 10/03/2020 a un total de 5 personas entre 15 y 30 años, 2 mujeres y 3 varones.

### II. Síntesis y definición
Hallazgos del **sondeo**.
- El 100% de las personas encuestadas conocía el juego.
- El 40% eran jugadores habituales.
- El 60% no eran jugadores pero si estaban interesados en jugarlo.
- Los jugadores habituales consideran que es importante conocer el rol de los campeones.
- Cuando eran principiantes los jugadores habituales por lo general elegían a sus campeones en función a recomendaciones de otros jugadores.

**Problem statements**

Para este objetivo se mantuvo la siguiente estructura: {Persona} necesita una manera {necesidad}, porque/para {insight}.

Lxs _jugadorxs principiantes_ **necesitan** _información sencilla de los campeones de LOL_ **para** no _preguntar a otros jugadores_.

### III. Ideación

Para esta etapa se realizó un **Brainstorming** que nos permitió consolidar la idea del producto, el cual consiste en una aplicación acorde a las necesidades del usuarix o jugadxr principiante de League of Legends. 

Mediante un **Benchmarking** realizamos comparaciones en las distintas plataformas de ayuda a jugadores de LOL como por ejemplo [LoLegacy](http://www.lolegacyapp.com/) y [Fandom-LeagueOfLegends](https://leagueoflegends.fandom.com/es/wiki/League_of_Legends_Wiki), y así también analizamos la sección de campeones de la web oficial de [League_of_Legends](https://euw.leagueoflegends.com/es-es/champions/).

### IV. Prototipado

#### Prototipo de baja fidelidad

Realizamos los prototipos en baja fidelidad para obtener información rápida y medir su valor intuitivo, los cuales fueron probados con dos jugadorxs principiantes de LOL (nivel 1 y nivel 12 del juego). 

![0 1](https://user-images.githubusercontent.com/60791638/77876526-d49c0e00-7218-11ea-83d4-8065056ab70c.jpg)
![1](https://user-images.githubusercontent.com/60791638/77876669-3c525900-7219-11ea-832b-70c67080ffb5.jpeg)
![2](https://user-images.githubusercontent.com/60791638/77876699-4d9b6580-7219-11ea-8390-4e9e82fbd83c.jpeg)
![3](https://user-images.githubusercontent.com/60791638/77876723-59872780-7219-11ea-9fb8-2c304ba648de.jpeg)
![4](https://user-images.githubusercontent.com/60791638/77876740-69067080-7219-11ea-90d7-d0c451b4d49d.jpeg)
![5](https://user-images.githubusercontent.com/60791638/77876750-728fd880-7219-11ea-85b8-31d1a3ec7504.jpeg)
![6](https://user-images.githubusercontent.com/60791638/77876765-7d4a6d80-7219-11ea-8238-d18b23e3a51e.jpeg)

Observaciones:
1. En el primer prototipo de login, ninguno de lxs jugadorxs entiende el botón de ingreso.
2. La usuaria que se encuentra en nivel 1 no identifica los símbolos de roles.

Modificaciones:
1. Se procede a realizar un segundo prototipo en baja fidelidad para subsanar el botón de ingreso.

![-1](https://user-images.githubusercontent.com/60791638/77876798-98b57880-7219-11ea-8466-948ff7b6ddb2.jpg)
![test de usabilidad](https://user-images.githubusercontent.com/60791638/77877622-dd421380-721b-11ea-9c2b-fdc469ef2183.jpeg)

#### Prototipos de media fidelidad:
Para su elaboración se precisó respetar las historias de usuario elegidas, así como corregir las observaciones de lxs jugadorxs respecto al botón de ingreso e identificador de los botones de roles.

**Modificaciones:**
**Vista Principal (Historia 1)**
1. Se establece un espacio para adjuntar una imagen representativa de los campeones de LOL en la página de inicio.
2. La página de inicio presenta un botón de ingreso más intuitivo.
3. Se definió la marca del producto: **WikiLol**.
4. Se establecieron identificadores emergentes en cada botón del rol.

![1baja](https://user-images.githubusercontent.com/60791638/77878449-edf38900-721d-11ea-8679-bb2d3c6515c8.jpg)
![2baja](https://user-images.githubusercontent.com/60791638/77878451-ee8c1f80-721d-11ea-85ca-13ab811f8edb.jpg)
![3baja](https://user-images.githubusercontent.com/60791638/77878453-ef24b600-721d-11ea-981b-b36f1a6d0e4f.jpg)
![4baja](https://user-images.githubusercontent.com/60791638/77878454-ef24b600-721d-11ea-8d2f-6bed0a4db1ca.jpg)
![5baja](https://user-images.githubusercontent.com/60791638/77878455-efbd4c80-721d-11ea-8c14-8c7ac7456237.jpg)
![6baja](https://user-images.githubusercontent.com/60791638/77878456-f055e300-721d-11ea-9c33-eeb986c9b449.jpg)

#### Prototipos de alta fidelidad

La elaboración de los prototipos se realizó en **Figma** y se puede acceder a los diseños haciendo click en el siguiente enlace [Prototipo-WikiLol](https://www.figma.com/file/NuQLNv49KWsXfNO8JCZu9y/Prototipo-Lol?node-id=0%3A1)

![1alta](https://user-images.githubusercontent.com/60791638/77879171-66a71500-721f-11ea-9c40-ffb3f0f8a3d1.jpg)
![2alta](https://user-images.githubusercontent.com/60791638/77879162-6444bb00-721f-11ea-8785-61ce523e45f9.jpg)
![3alta](https://user-images.githubusercontent.com/60791638/77879164-64dd5180-721f-11ea-98fa-f3137646e221.jpg)
![4alta](https://user-images.githubusercontent.com/60791638/77879165-6575e800-721f-11ea-9f0c-af70da275ac5.jpg)
![5alta](https://user-images.githubusercontent.com/60791638/77879167-660e7e80-721f-11ea-8915-bc4ead9ae132.jpg)
![6alta](https://user-images.githubusercontent.com/60791638/77879170-660e7e80-721f-11ea-998d-51ea42cfb9ea.jpg)

### Diseño responsive

![1responsive](https://user-images.githubusercontent.com/60791638/77880203-b5ee4500-7221-11ea-8736-e1eaa92d25ac.jpg)
![2responsive](https://user-images.githubusercontent.com/60791638/77880207-b686db80-7221-11ea-88df-4eb63837121f.jpg)
![3responsive](https://user-images.githubusercontent.com/60791638/77880209-b71f7200-7221-11ea-9c43-3209cd6089aa.jpg)

### IV. Testing

El feedback nos permitió centrarnos en un diseño sencillo y fácil de entender por jugadorxs principiantes, además buscamos la comodidad visual al utilizar una paleta de colores que no se aleje de valores cromáticos utilizados en el juego y en la página oficial de League of Legends. 

Realizamos el testing del prototipo final para ver cómo se relacionaba el usuario con nuestra plataforma y concluimos lo siguiente:
- El usuario pudo acceder a la plataforma de la manera esperada.
- El usuario pudo identificar los botones de roles.
- El usuario hizo click en la imagen del campeón y accedió a sus características.
- El usuario identificó el buscador.
- El usuario identificó el botón de ordenar, pero no consideró necesario su uso.

Para acceder a la opinión de este usuario (jugador habitual) puede hacer click en el siguiente enlace del [testing](https://www.loom.com/share/6e26f6780ebd47a08c3cb59ff13e7573).

![testing](https://user-images.githubusercontent.com/60791638/78634693-1d337700-786a-11ea-9d0b-f31c36bad3e9.jpg)


## 3. Planning

Para el desarrollo del proyecto se utilizó la plataforma **Trello** para organizar las historias de usuario elegidas. La organización de cada historia, criterios de aceptación y definición determinada pueden ser visualizadas en el siguiente enlace [Trello-DataLovers](https://trello.com/b/sr9gleii/data-lovers).

Las **historias de usuarios** elegidas están fundamentadas en los requerimientos del proyecto (búsqueda, ordenado, filtrado y cálculo de la data), en función de las necesidades de jugadorxs principiantes que quieran familiarizarse con League of Legends.

### Historias de usuario

1. Yo como jugador principiante quiero loguearme con mi nombre para acceder al sitio web.

2. Yo como jugador principiante quiero ver a todos los campeones para hacer mi elección.

3. Yo como jugador principiante quiero seleccionar un campeón para ver sus características más importantes.

4. Yo como jugador quiero filtrar la lista de campeones para identificarlos por sus roles.

5. Yo como jugador quiero un buscador para identificar a mi campeón por nombre.

6. Yo como jugador quiero ordenar a los campeones de la A-Z y viceversa.

7. Yo como jugador quiero ver el promedio del nivel de regeneración de los campeones.


## 4. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [ ] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`).
- [x] Manejar eventos del DOM. (`addEventListener`)
- [ ] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [x] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [x] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [x] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [ ] Colaborar en Github (`pull requests`).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).


Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para que Marilyn me pueda compartir su información debe hacer:

""Open Git Bash.

List the current configured remote repository for your fork.

$ git remote -v
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
Specify a new remote upstream repository that will be synced with the fork.

$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
Verify the new upstream repository you've specified for your fork.

$ git remote -v
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)""


Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atomicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

***

## Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
