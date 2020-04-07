// import { allChampions } from './data.js';
import copyLol from './data/lol/lol.js';
import {

  alphabetOrder,
  roleFilter,
} from './data.js';

const dataLol = (copyLol.data);
// Declaramos las variables - Manipulación dinámica del DOM
const viewLogin = document.getElementById('viewLogin');
const viewChampions = document.getElementById('viewChampions');
const inputName = document.getElementById('inputName');
const buttonEnter = document.getElementById('buttonEnter');
const invocadorName = document.getElementById('invocadorName');
const container = document.getElementById('container');
const myModal = document.getElementById('myModal');
const text = document.getElementById('text');
const search = document.getElementById('search');
// const modalInfo = document.getElementById('modaInfo');
// Historia 1
// Evento que recoge el nombre del usuario al hacer click y se inserta en la siguiente vista:
buttonEnter.addEventListener('click', () => {
  if (inputName.value === '') {
    text.innerHTML = 'Invocador@, este campo es obligatorio';
  } else {
    const userName = inputName.value;
    invocadorName.innerHTML += userName;
    viewChampions.classList.remove('hide');
    viewLogin.classList.add('hide');
  }
});
// Historia 2 - Muestra a los campeones (nombre e imagen)
const data = Object.values(dataLol);
const showData = (parametro) => {
  let show = '';
  parametro.forEach((element) => {
    const campeones = `            
      <div class="champ" data-id=${element.id}  name="champion">
      <img src=${element.splash} data-id=${element.id} class="splash"/> 
      <h1 class="championsName" data-id=${element.id} >${element.id} </h1>
      </div>
    `;
    show += campeones;
  });
  container.innerHTML = show;
};
showData(data);
// HU filtrado por nombre
search.addEventListener('keyup', (event) => {
  const term = event.target.value.toLowerCase();
 const filterByName = data.filter
});



// Modal Historia 3
container.addEventListener('click', (event) => {
  const nombreSeleccionado = event.target.dataset.id;
  const objCampeonSeleccionado = (dataLol[nombreSeleccionado]);
  myModal.classList.remove('hide');
  myModal.querySelector('#modalInfo').innerHTML = `
    <p class= "modalName">${objCampeonSeleccionado.name} </p>
   <p class="modalTitle">${objCampeonSeleccionado.title} </p>
   <img src=${objCampeonSeleccionado.splash} class="imgSplash"/>
   <p class="modalTags"> Rol: ${objCampeonSeleccionado.tags} </p>
   <div class="info">
   <p> Defensa:${objCampeonSeleccionado.info.defense} </p>
   <p> Ataque:${objCampeonSeleccionado.info.attack} </p>
   <p> Magia:${objCampeonSeleccionado.info.magic} </p>
   <p> Dificultad:${objCampeonSeleccionado.info.difficulty} </p>
   </div>
   <div class="stats">
   <p> Vida: ${objCampeonSeleccionado.stats.hp} </p>
   <p> Mana: ${objCampeonSeleccionado.stats.mp} </p>
   <p> Velocidad: ${objCampeonSeleccionado.stats.movespeed} </p>
   <p> Ataque: ${objCampeonSeleccionado.stats.attackrange} </p>
   </div>
   `;
});
// Evento cerrar Modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('myModal').classList.add('hide');
});

// Historia 4 - Filtrar por Roles
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Assassin'));
});

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Fighter'));
});

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Mage'));
});

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Marksman'));
});

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Support'));
});

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  showData(roleFilter(data, 'Tank'));
});

// Historia 6 - Ordenar (A-Z / Z-A)
const buttonOrder = document.querySelector('#buttonOrder');
buttonOrder.addEventListener('change', () => {
  const valueOrder = buttonOrder.value;
  container.innerHTML = '';
  showData(alphabetOrder(data, valueOrder));
});
