// import { allChampions } from './data.js';
import copyLol from './data/lol/lol.js';
import { alphabetOrder } from './data.js';


const dataLol = (copyLol.data);
// Declaramos las variables - Manipulación dinámica del DOM
const viewLogin = document.getElementById('viewLogin');
const viewChampions = document.getElementById('viewChampions');
const inputName = document.getElementById('inputName');
const buttonEnter = document.getElementById('buttonEnter');
const nameInvocador = document.getElementById('nameInvocador');
const container = document.getElementById('container');

// Evento que recoge el nombre del usuario al hacer click y se inserta en la siguiente vista:
buttonEnter.addEventListener('click', () => {
  const userName = inputName.value;
  nameInvocador.innerHTML += userName;
  viewChampions.classList.remove('hide');
  viewLogin.classList.add('hide');
});
// Historia 2 - Muestra a los campeones (nombre e imagen)
const data = Object.values(dataLol);
const showData = (parametro) => {
  let show = '';
  parametro.forEach((element) => {
    const campeones = `            
            <div class="champ">
            <img src=${element.splash} class="splash"/> 
            <h1 class="nameChampions"> ${element.name}<h1>
            </div>`;
    show += campeones;
  });
  container.innerHTML = show;
};
showData(data);


const buttonOrder = document.querySelector('#buttonOrder');
// utilizando querySelector y getelementebyid funcions en boton
// Historia 3 - dando vida al boton de ordenar
buttonOrder.addEventListener('change', () => {
  const valueOrder = buttonOrder.value;
  container.innerHTML = '';
  showData(alphabetOrder(data, valueOrder));
});
