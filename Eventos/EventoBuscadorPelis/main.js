/*
const selector = document.getElementById('miSelector');
const miInput = document.getElementById('miInput');
const miBoton = document.getElementById('miBoton');
const miListado = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('Cambiomodo', mensajeModo);
miInput.addEventListener('keydown', verificaInput)
miBoton.addEventListener('click', buscar);

function cambiarArchivo(){
    archivo = selector.value;
    const evento = new CustomEvent('Cambiomodo');
}

function mensajeModo(){
    swal.fire('El archivo de busqueda ahora es: ', selector.value);
}

function verificaInput(evento){
    if(evento.keycode < 65 || evento.keycode > 90 && evento.keycode !== 32 && evento.keycode !== 8){
        evento.preventDefault();
    }
}

function buscar(){
    miListado.innerHTML='';
    fetch(archivo).then(respuesta => respuesta.json())
    .then(salidaBuscador())
}

function salidaBuscador(salida){
    for(let item of salida.data){
        if(item.nombre.startsWhith(input.value.toUpperCase())){
            let p = document.createElement('p');
            p.id = item.nombre;
            p.innerHTML = item.sinopsis;
            p.style.display = 'none';
            let li = document.createElement('li');
            li.innerHTML = item.nombre;
            li.addEventListener('mouseover', mouseoverList);
            li.addEventListener('mouseout', mouseoutList);
        }
        li.appendChild(p)
        miListado.appendChild(li)
    }
    
function mouseoverList(){
    let p = document.getElementById(item.nombre);
    p.style.display = 'block';
}
function mouseoutList(){
    let p = document.getElementById(item.nombre);
    p.style.display = 'nose';
}
}

*/

const selector = document.getElementById('miSelector');
const miInput = document.getElementById('miInput');
const miBoton = document.getElementById('miBoton');
const miListado = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('Cambiomodo', mensajeModo);
miInput.addEventListener('keydown', verificaInput);
miBoton.addEventListener('click', buscar);

function cambiarArchivo() {
    archivo = selector.value;
    const evento = new CustomEvent('Cambiomodo');
}

function mensajeModo() {
    swal.fire('El archivo de búsqueda ahora es: ', selector.value);
}

function verificaInput(evento) {
    if (evento.keyCode < 65 || evento.keyCode > 90 && evento.keyCode !== 32 && evento.keyCode !== 8) {
        evento.preventDefault();
    }
}

function buscar() {
    miListado.innerHTML = '';
    fetch(archivo)
        .then(respuesta => respuesta.json()) // Asegúrate de usar los paréntesis
        .then(salidaBuscador)
        .catch(error => console.error('Error en la búsqueda:', error)); // Manejo de errores
}

function salidaBuscador(salida) {
    for (let item of salida.data) {
        if (item.nombre.toUpperCase().startsWith(miInput.value.toUpperCase())) { // Corregido 'startWhith' a 'startsWith'
            let p = document.createElement('p');
            p.id = item.nombre;
            p.innerHTML = item.sinopsis;
            p.style.display = 'none';

            let li = document.createElement('li');
            li.innerHTML = item.nombre;
            li.addEventListener('mouseover', () => mouseoverList(item));
            li.addEventListener('mouseout', () => mouseoutList(item));

            li.appendChild(p);
            miListado.appendChild(li);
        }
    }
}

function mouseoverList(item) {
    let p = document.getElementById(item.nombre);
    p.style.display = 'block';
}

function mouseoutList(item) {
    let p = document.getElementById(item.nombre);
    p.style.display = 'none'; // Corregido 'nose' a 'none'
}
