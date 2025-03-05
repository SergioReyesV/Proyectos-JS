const boton = document.getElementById('boton1');
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3');
const divboton3 = document.getElementById('divBoton3');
const enlace = document.getElementById('enlace1');
const texto1 = document.getElementById('texto1');

function mensajeAlert() {
    alert('Presionaste el boton');
}

function mensajeAlert2() {
    alert('Soy un MouseOver')
}

function mostrarMensaje(event) {
    alert(event.target); // muestra el elemento boton
    alert(event.currentTarget) // muestra el elemento asociado al boton que es el div
}

function bloqueoEnlace(event) {
    event.preventDefault();
    alert('Enlace deshabilitado')
}
function verificaNum(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    }
}
function keyArriba(event) {
    console.log('Entrda del usuario: ' , event.target.value);
}

function keypresionada(event){
    console.log('Caracter ingresado: ' , event.key);
}

boton.addEventListener('click', mensajeAlert);
boton2.addEventListener('mouseover', mensajeAlert2);
divboton3.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', bloqueoEnlace)
texto1.addEventListener('keydown', verificaNum)
texto1.addEventListener('keyup', keyArriba);
texto1.addEventListener('keypress', keypresionada)
