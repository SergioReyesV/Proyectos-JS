const socket = new WebSocket('ws://localhost:8080');
const mensajeIngresado = document.getElementById('mensajeIngresado');
const botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido){
    const contenedorMensages = document.getElementById('mensajeChat');
    const elementoMensage = document.createElement('p');
    elementoMensage.innerText = contenido;
    contenedorMensages.appendChild(elementoMensage);
}


botonEnviar.onclick = function enviarMsg(){
    const mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
}

socket.onmessage = function recibirMsg(event){
    const mensaje = event.data;
    mostrarMensajes(mensaje);
}
