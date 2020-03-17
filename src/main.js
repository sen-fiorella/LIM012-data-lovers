// import { allChampions } from './data.js';
// import copyLol from './data/lol/lol.js';
// const dataLOL = allChampions(copyLol.data);
 
// console.log(dataLOL);
 
 
//vista1=Página principal (manipulación dinámica del DOM)
const viewLogin = document.getElementById("viewLogin");
//vista2
const viewChampions = document.getElementById("viewChampions");
//Se ingresa nombre en input(User)
const inputName = document.getElementById("inputName");
const buttonEnter = document.getElementById("buttonEnter");
let nameInvocador = document.getElementById("nameInvocador");
// const contaner = document.getElementById("contaner");
 
 
//Evento que al hacer click en el botón recoge el nombre (userName) y lo inserta en la siguiente vista
buttonEnter.addEventListener("click", () => {
    let userName = inputName.value;
    nameInvocador.innerHTML += userName;
    viewChampions.classList.remove("hide");
    viewLogin.classList.add("hide");   
});
 
// export const allChampions = (arrayLOL) => {
//     contaner.innerHTML = "";
//     for (let i = 0; i < arrayLOL.length; i++) {
//     const nombre = arrayLOL[i].name;
//     contaner.innerHTML += nombre;
//     }
 
// };
