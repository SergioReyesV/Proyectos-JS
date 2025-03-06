const audio = document.getElementById('audio');
const listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    const cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();
    const evento = new CustomEvent('CambioDeCancion');
    audio.dispatchEvent(evento);
}
audio.addEventListener('CambioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log('Cancion actual: ',listaCanciones.value)
}