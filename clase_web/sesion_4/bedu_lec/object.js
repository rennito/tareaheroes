// ESTO ES UN OBJETO

/*var perro ={
    nombre:"rex",
    edad: 5,
    vivo: true
}
console.log(perro.nombre);

var perro2 ={
    nombre:"tomy",
    edad: 3,
    vivo: false
}
console.log(perro2.nombre);*/

// CONTRSUCTOR DE OBJETOS

function Perro (nombre, edad , vivo){
    this.nombre =nombre;
    this.edad = edad;
    this.vivo = vivo;
};

var perro1 = new Perro("rex",5,true)
console.log(perro1)

var perro2 = new Perro("tony",35,false)
console.log(perro2)

var animal = [perro1,perro2]
console.log(animal)