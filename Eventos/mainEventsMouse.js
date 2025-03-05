const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

//FUNCIONES

function mostratMenu(){
    menu.style.display = 'block';
}
function mostratMenu2(){
    menu2.style.display = 'block';
}
function ocultarMenu2(){
    menu2.style.display = 'none';
}
function verCoordenadasMouse(event){
    console.log('Posicion x: ', event.clientX , ' Posicion y: ', event.clientY);
}

document.addEventListener('mousemove', verCoordenadasMouse);



boton1.addEventListener('click', mostratMenu);
boton2.addEventListener('mouseover', mostratMenu2);
boton2.addEventListener('mouseout',ocultarMenu2);







