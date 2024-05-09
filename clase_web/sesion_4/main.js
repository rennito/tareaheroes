// Arreglos
// estructura de datos que mantiene su información organizada y es un conjunto
// de elementos ordenados
// interacción por posiciones donde comenzamos por la posición 0 hasta n (total de elementos - 1)

// sintaxis
// const array = [];

// ejemplo
// queremos obtener la información de un salon de clases, queremos saber el nombre completo de cada alumno

const alumnos = [];

// crear agregar elementos a un arreglo
// push
// arreglo.push()
// elemento que entra es el ultimo de la lista
// si el arreglo esta vacio, y entra al arreglo obtendra la posicion 0
// si agegamos un nuevo elemento, obtendra la posicion 1

const numeros = [ 1, 2, 3, 4 ] // 4
//  0 (primer elemento)
//  n-1 (ultimo elemento)

// propiedad length
//  el numero total de elementos
// numeros.length 4

numeros.length // 4
numeros.push(8,4) // 6
// [ 1,2,3,4,8,4 ]

let r = "si";
const nombres = [];

while (r === "si") {
  const nombre = prompt("Nombre del alumno")
  nombres.push(nombre);
  r = prompt("Registrar un nuevo alumno[si/no]")
}

console.log("total de alumnos: ", nombres.length)
console.info(nombres)

// lectura
// arreglo[posicion numerica]

// obtener el numero 3 de mi arreglo
numeros[2]; // 3

// actualizacion
// arreglo[posicion numerica] = nuevovalor;

// cambiar el valor de la posicion 4 por el numero 20
numeros[4] = 20;

numeros[20] = 56; // ?

// eliminar elementos
// .pop()
// regresa el ultimo valor del arreglo

console.log(numeros.pop()) // 56

// modificacion

// unshift 
// agrega un elemento al inicio del arreglo
numeros.unshift(90); // 0
// valor 20 del arreglo 
// metodo que permite agregar un nuevo valor pero al inicio del arreglo

// shift
// elimina el primer elemento del arreglo
numeros.shift();

// splice
//elimina elementos apartir de una posicion en especificop
// 2 parametros, el primero es obligatorio e indica desde que posicion comenzamos a eliminar
// el segundo indica cuanto elementos se debe eliminar, si no se coloca, eliminara hasta el final
// del arreglo


// Objetos
// sintaxis: const objeto = {};

// propiedades, difienen valores
// metodos, definen acciones

const ramon = {
  nombre: "Ramon hernandez",
  edad: 45,
  votar: true,
  hobbies: ["futbol", "tocar la guitarra", "dormir"],
  credencial: {
    id: "FEFEFf",
    direccion: "cerca del arroyo"
  },
  hablar: function() {},
  correr: () => {},
  gastar: () => {},
  0: 56
};

// Crear o agregar
ramon.altura = 1.75;
ramon["peso"] = 80;

const ramiro = {
  nombre: "Ramiro hernandez",
  votar: false,
  hablar: function() {},
  correr: () => {},
  0: 56
};

// ramiro.hobbies = ["comer", "nadar", "jugar"];
// ramiro["oficio"] = ["carpintero"];


// lectura
ramon.credencial.vigencia = true; //
ramon["credencial"];

// actualizacion
ramiro.hobbies = ["comer", "nadar", "jugar"];
ramiro["oficio"] = ["carpintero"];

// eliminacion
delete ramon.credencial.id


// sugar sintaxis
// spread operator

// creacion de un objeto o arreglo a partir de otro
// crear un nuevo arreglo apartir de otro
// const nuevo = [ ...arreglo ]

// crear un nuevo objeto apartir de otro
// const nuevo = { ...objeto }

const arr =[3,4,5];