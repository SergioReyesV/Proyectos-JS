class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion() {
        return "${this.nombre} - ${this.edad} edad - {this.peso} kg"
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`
    }
}
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`
    }

}
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.color}`
    }

}

const perro1 = new Perro('Piwi', 8, 12, 'Delmo');
const gato1 = new Gato('Kiri', 5, 8, 'Felino');
const conejo1 = new Conejo('BoxBuny', 4, 2, 'Conejo');

const animales = [perro1,gato1,conejo1];

function mostrarAnimales(){
    // biome-ignore lint/style/useConst: <explanation>
    let lista = document.getElementById('listaAnimales');
    // biome-ignore lint/style/useConst: <explanation>
    for(let animal of animales){
        // biome-ignore lint/style/useConst: <explanation>
        let item= document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}
