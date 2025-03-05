const socket = new WebSocket('ws://localhost:8080');
const mensajeIngresado = document.getElementById('mensajeIngresado');
const botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido){
    const contenedorMsg = document.getElementById('mensajeChat');
    const elementoMsg = document.createElement('p');
    elementoMsg.innerText = contenido;
    contenedorMsg.appendChild(elementoMsg);
}

botonEnviar.onclick(on);
function on(){
    const mesaje = mensajeIngresado.value;
    mostrarMensajes(mesaje);
    socket.send(mesaje);
}
socket.onmessage = onmsg();

function onmsg(event){
    const mensaje = event.data;
    mostrarMensajes(mensaje)
}