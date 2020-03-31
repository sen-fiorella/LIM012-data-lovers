# Data Lovers
 
## Índice
 
* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. User Experience Design](#3-user-experience-design)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)
 
***
 
## 1. Preámbulo
 
El MOBA League of Legends de Riot Games sigue en las primeras posiciones de los juegos free-to-play que más dinero generan, siendo las ganancias para el 2019 de 1.5 mil millones de dólares. En septiembre del 2019 [Riot Games](https://bolavip.com/gamer/Encuesta-revela-que-el-71-de-los-jugadores-de-League-of-Legends-estan-solteros-20200213-0047.html) revelaba que "cada día hay un pico de ocho millones de jugadores en simultaneo en League, que hacen de League of Legends el juego de PC más grande del mundo".
 
Para iniciarse en el juego y convertirse en **invocador@** de **League of Legends** es de vital importancia conocer y elegir a los campeones estatrégicamente con la finalidad de ganar las partidas y sobre todo divertirse. Como el universo de LOL es enorme y cuenta con más de 140 campeones,  hemos creado la aplicación **WIKILOL**, aquí podrán conocer los roles y características más importantes de todos los campeones.
 
 
## 2. Resumen del proyecto
 
Wikilol una aplicación fácil, cómoda y sencilla que le permite familiarizarse con el contenido visual del juego a l@s jugador@s principiantes que estén interesad@s en ingresar al mundo de League of Legends. 
 
Para la construcción de este proyecto se analizó al conjunto de (set) de datos facilitados y se eligieron aquellos considerados como los más importantes y útiles para que Wikilol se convierta en la mejor herramienta que pueda tener un@ invocador@ a la hora de elegir a los campeones que le ayudarán a ganar las partidas.
 
Según la investigación que realizamos para este proyecto concluimos que además de conocer las características principales, consideramos muy importante que quienes quieran iniciarse en el juego deben identificar plenamente el rol de cada uno
de los campeones y esto lo pueden lograr gracias a Wikilol.
 
## 3. User Experience Design
 
### Definición del producto
++Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.++
 
### Historias de usuario
 
Para el proceso de ideación y plasmar las historias de usuario elegidas para el desarrollo del proyecto se utilizó la plataforma **Trello**. Para ver la organización de cada historia, criterios de aceptación y definición determinada puede hacer click en siguiente enlace [Trello-DataLovers](https://trello.com/b/sr9gleii/data-lovers).
 
Las **historias de usuarios** elegidas están fundamentadas en los requerimientos del proyecto (búsqueda, ordenado, filtrado y cálculo de la data), en función de las necesidades de l@s usuari@s principiantes que quieran familiarizarse con League of Legends.
 
1. Yo como jugador principiante quiero loguearme con mi nombre para acceder al sitio web.
 
2. Yo como jugador principiante quiero ver a todos los campeones para hacer mi elección.
 
3. Yo como jugador principiante quiero seleccionar un campeón para ver sus características más importantes.
 
4. Yo como jugador quiero filtrar la lista de campeones para identificarlos por sus roles.
 
5. Yo como jugador quiero un buscador para identificar a mi campeón por nombre.
 
6. Yo como jugador quiero ordenar a los campeones de la A-Z y viceversa.
 
7. Yo como jugador quiero ver el promedio del nivel de regeneración de los campeones.
 
++Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.
 
Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.
 
En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).++
 
### **Diseño de la Interfaz de Usuario**
 
#### Prototipo de baja fidelidad
 
**Primera elaboración de sketch**:
 
Los primeros prototipos fueron probados para medir su valor intuitivo respecto al maquetado y la funcionalidad. El test de usabilidad de los prototipos de baja fidelidad fueron probados con dos usuari@s principiantes de LOL (nivel 1 y nivel 12 del juego). 
 
![0 1](https://user-images.githubusercontent.com/60791638/77876526-d49c0e00-7218-11ea-83d4-8065056ab70c.jpg)
![1](https://user-images.githubusercontent.com/60791638/77876669-3c525900-7219-11ea-832b-70c67080ffb5.jpeg)
![2](https://user-images.githubusercontent.com/60791638/77876699-4d9b6580-7219-11ea-8390-4e9e82fbd83c.jpeg)
![3](https://user-images.githubusercontent.com/60791638/77876723-59872780-7219-11ea-9fb8-2c304ba648de.jpeg)
![4](https://user-images.githubusercontent.com/60791638/77876740-69067080-7219-11ea-90d7-d0c451b4d49d.jpeg)
![5](https://user-images.githubusercontent.com/60791638/77876750-728fd880-7219-11ea-85b8-31d1a3ec7504.jpeg)
![6](https://user-images.githubusercontent.com/60791638/77876765-7d4a6d80-7219-11ea-8238-d18b23e3a51e.jpeg)
Observaciones:
1. En el primer prototipo de login, ninguno de l@s usuari@s entiende el botón de ingreso.
2. La usuaria que se encuentra en nivel 1 no identifica la función de los símbolos de roles.
 
Se procede a realizar un segundo prototipo en baja fidelidad para subsanar el botón de ingreso.
 
![-1](https://user-images.githubusercontent.com/60791638/77876798-98b57880-7219-11ea-8466-948ff7b6ddb2.jpg)
![test de usabilidad](https://user-images.githubusercontent.com/60791638/77877622-dd421380-721b-11ea-9c2b-fdc469ef2183.jpeg)
 
**Segunda elaboración prototipos en blanco y negro:**
Para su elaboración se precisó respetar las historias de usuario elegidas, así como corregir las observaciones de l@s usuarios respecto al botón de ingreso e identificador de los botones de roles.
 
![1baja](https://user-images.githubusercontent.com/60791638/77878449-edf38900-721d-11ea-8679-bb2d3c6515c8.jpg)
![2baja](https://user-images.githubusercontent.com/60791638/77878451-ee8c1f80-721d-11ea-85ca-13ab811f8edb.jpg)
![3baja](https://user-images.githubusercontent.com/60791638/77878453-ef24b600-721d-11ea-981b-b36f1a6d0e4f.jpg)
![4baja](https://user-images.githubusercontent.com/60791638/77878454-ef24b600-721d-11ea-8d2f-6bed0a4db1ca.jpg)
![5baja](https://user-images.githubusercontent.com/60791638/77878455-efbd4c80-721d-11ea-8c14-8c7ac7456237.jpg)
![6baja](https://user-images.githubusercontent.com/60791638/77878456-f055e300-721d-11ea-9c33-eeb986c9b449.jpg)
 
#### Prototipo de alta fidelidad
 
**Prototipos en alta fidelidad:**
El feedback nos permitió centrarnos en un diseño sencillo y fácil de entender por usuari@s principiantes, además buscamos la comodidad visual al utilizar una paleta de colores que no se aleje de valores cromáticos utilizados en el juego y en la página oficial de League of Legends. La elaboración de los prototipos se realizó en **Figma** y se puede acceder a los diseños haciendo click en el siguiente enlace [Prototipo-WikiLol](https://www.figma.com/file/NuQLNv49KWsXfNO8JCZu9y/Prototipo-Lol?node-id=0%3A1)
 
![1alta](https://user-images.githubusercontent.com/60791638/77879171-66a71500-721f-11ea-9c40-ffb3f0f8a3d1.jpg)
![2alta](https://user-images.githubusercontent.com/60791638/77879162-6444bb00-721f-11ea-8785-61ce523e45f9.jpg)
![3alta](https://user-images.githubusercontent.com/60791638/77879164-64dd5180-721f-11ea-98fa-f3137646e221.jpg)
![4alta](https://user-images.githubusercontent.com/60791638/77879165-6575e800-721f-11ea-9f0c-af70da275ac5.jpg)
![5alta](https://user-images.githubusercontent.com/60791638/77879167-660e7e80-721f-11ea-8915-bc4ead9ae132.jpg)
![6alta](https://user-images.githubusercontent.com/60791638/77879170-660e7e80-721f-11ea-998d-51ea42cfb9ea.jpg)
 
**Diseño responsive**
![1responsive](https://user-images.githubusercontent.com/60791638/77880203-b5ee4500-7221-11ea-8736-e1eaa92d25ac.jpg)
![2responsive](https://user-images.githubusercontent.com/60791638/77880207-b686db80-7221-11ea-88df-4eb63837121f.jpg)
![3responsive](https://user-images.githubusercontent.com/60791638/77880209-b71f7200-7221-11ea-9c43-3209cd6089aa.jpg)
 
 
++
Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.
++
 
#### Prototipo de alta fidelidad
 
Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la
[identidad gráfica](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE)
correspondiente a cada set de datos que elijas.
 
El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.
 
#### Testeos de usabilidad
 
Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.
 
 
 
## 4. Objetivos de aprendizaje
 
El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.
 
Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.
 
### UX
 
- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener _feedback_ e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [ ] Planear y ejecutar _tests_ de usabilidad.
 
### HTML y CSS
 
- [ ] Entender y reconocer por qué es importante el HTML semántico.
- [ ] Identificar y entender tipos de selectores en CSS.
- [ ] Entender como funciona `flexbox` en CSS.
- [ ] Construir tu aplicación respetando el diseño planeado (maquetación).
 
### DOM
 
- [ ] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`).
- [ ] Manejar eventos del DOM. (`addEventListener`)
- [ ] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)
 
### Javascript
 
- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).
 
### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).
 
### Git y GitHub
- [ ] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [ ] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [ ] Colaborar en Github (`pull requests`).
 
### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Utilizar linter para seguir buenas prácticas (ESLINT).
 
## 4. Consideraciones generales
 
* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 4 semanas.
 
## 5. Criterios de aceptación mínimos del proyecto
 
 
### Implementación de la Interfaz de Usuario (HTML/CSS/JS)
 
Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
No tienes tiempo ilimitado para trabajar, así es que deberás priorizar.
 
Como mínimo, tu implementación debe:
 
1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
   <!--filtrar y ordenar la data.-->
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.
 
### Pruebas unitarias
 
El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones que tenga tu código.
<!--encargadas de  _procesar_, _filtrar_ y _ordenar_ la data, así
como _calcular_ estadísticas.-->
 
Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).
 
## 6. Hacker edition
 
Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.
 
Features/características extra sugeridas:
 
* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage
 
## 7. Consideraciones técnicas
 
La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.
 
No se debe utilizar la _pseudo-variable_ `this`.
 
El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:
 
```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── atletas
|  |     ├── atletas.js
|  |     └── atletas.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js
 
directory: 6 file: 17
```
 
### `src/index.html`
 
Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.
 
### `src/main.js`
 
Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....
 
Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.
 
En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.
 
Por ejemplo, si "descomentamos" la siguiente línea:
 
```js
// import data from './data/pokemon/pokemon.js';
```
 
La línea quedaría así:
 
```js
import data from './data/pokemon/pokemon.js';
```
 
Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.
 
### `src/data.js`
 
El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.
 
Te reomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:
 
* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.
 
* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.
 
* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.
 
Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.
 
Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).
 
### `src/data`
 
En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).
 
### `test/data.spec.js`
 
Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.
 
## 8. Pistas, tips y lecturas complementarias
 
### Primeros pasos
 
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
 
Cuando ya estés lista para codear, te sugerimos empezar de esta manera:
 
1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:
 
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
 
***
 
### Contenido de referencia
 
#### Diseño de experiencia de usuario (User Experience Design)
 
* Investigación con usuarios / entrevistas
* Principios de diseño visual
 
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
 
## 9. Checklist
 
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
 

