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
const modalInfo = document.getElementById('modaInfo');


// Historia 1
// Evento que recoge el nombre del usuario al hacer click y se inserta en la siguiente vista:
buttonEnter.addEventListener('click', () => {
  const userName = inputName.value;
  invocadorName.innerHTML += userName;
  viewChampions.classList.remove('hide');
  viewLogin.classList.add('hide');
});

// Historia 2 - Muestra a los campeones (nombre e imagen)
const data = Object.values(dataLol);
const showData = (parametro) => {
  let show = '';
  parametro.forEach((element) => {
    const campeones = `            

      <div class="champ" name="champion">
      <img src=${element.splash} class="splash"/> 
      <h1 class="championsName">${element.name} </h1>
      </div>`;
    show += campeones;
  });
  container.innerHTML = show;
};
showData(data);


// Historia 3 - Ordenar (A-Z / Z-A)
const buttonOrder = document.querySelector('#buttonOrder');
buttonOrder.addEventListener('change', () => {
  const valueOrder = buttonOrder.value;
  container.innerHTML = '';
  showData(alphabetOrder(data, valueOrder));
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

// Modal
container.addEventListener('click', () => {
  const position = parseInt(event.target.parentElement.id - 1);
  // se usa para la delegación de un evento, esta es la condición
  if (event.target.parentElement.getAttribute('name') === 'champion') {
    myModal.classList.remove('hide');
    modalInfo.innerHTML = `
    <p> Nombre:  ${copyLol[position].name}</p>`;
  }
});

// Evento cerrar Modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('myModal').classList.add('hide');
});


