// import { allChampions } from './data.js';
import copyLol from './data/lol/lol.js';
const dataLol = (copyLol.data);

//Declaramos las variables - Manipulación dinámica del DOM
const viewLogin = document.getElementById('viewLogin');
const viewChampions = document.getElementById('viewChampions');
const inputName = document.getElementById('inputName');
const buttonEnter = document.getElementById('buttonEnter');
let nameInvocador = document.getElementById('nameInvocador');
const container = document.getElementById('container');

//Evento que recoge el nombre del usuario al hacer click y se inserta en la siguiente vista:
buttonEnter.addEventListener('click', () => {
    let userName = inputName.value;
    nameInvocador.innerHTML += userName;
    viewChampions.classList.remove('hide');
    viewLogin.classList.add('hide');
});

//Historia 2 - Muestra a los campeones (nombre e imagen)
const data = Object.values(dataLol);
const showData = (parametro) => {
    let show = '';
    parametro.forEach(element => {
        const campeones = `            
            <div class="champ">
            <img src=${element.splash} class="splash"/> 
            <h1 class="nameChampions">${element.name} </h1>
            </div>`;
        show += campeones;
    });
    container.innerHTML = show;
};
showData(data);











