//Funciones PURAS
/*Para identificar que estamos frente a una función impura, hay que considerar los siguientes indicadores:

No tiene argumentos de entrada.
No devuelve ningún valor.
Usa 'this'.
Usa variables globales. */

let globalContext = 0

function pureAdd(arg1,arg2){
    return arg1 + arg2;
}

function impureAdd(arg1,arg2){
    return globalContext += arg1 + arg2;
}

let argNumber1 = 5;
let argNumber2 = 7;

console.log(pureAdd(argNumber1,argNumber2));
console.log(impureAdd(argNumber1,argNumber2));

console.log(pureAdd(argNumber1,argNumber2));
console.log(impureAdd(argNumber1,argNumber2));

console.log(pureAdd(argNumber1,argNumber2));
console.log(impureAdd(argNumber1,argNumber2));

/*Ejemplo de funciones puras:

A continuación, te compartimos un ejemplo en donde verás la manera de asignar propiedades de un objeto dentro de otro, pero sin modificar el original. Para esto haremos uso del método Object.assing().

Este método lo que hace es crear un objeto nuevo a partir del original pero agregando propiedades y/o valores nuevos.

Primero creamos el objeto car y lo modificamos sin el método Object.assign(). */

var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
  }
  
  function addColor(car) {
    car.color = 'Black';
    return car;
  }
  
  console.log('Before calling addColor()', car);
  
  var sameCar = addColor(car);
  
  console.log('After calling addColor()', car);
  console.log('After calling addColor()', sameCar);
  console.log('Same car?', car === sameCar); // true

  /*Creamos la función addColor() para poder agregarle la propiedad color al objeto car. Esta función está mutando al objeto que recibe.
La primera vez que mostramos en consola vemos que no existe la propiedad color, después de llamar a la función vemos la propiedad en ambos objetos.
El objeto retornado por addColor es el mismo que recibió.
Ambas variables, tanto car como sameCar están apuntando al mismo objeto en memoria. */




function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }
  
  
  console.log('Before calling addColor()', car);
  
  var sameCar = addColor(car);
  
  console.log('After calling addColor()', car);
  console.log('After calling addColor()', sameCar);
  console.log('Same car?', car === sameCar); // tru


/* EJERCICIO
Vamos a agregar un número par a un arreglo vacío mediante el uso de funciones puras.
*/




var evenNumbers = [];

function isEvenNumber(number){
  return number % 2 === 0;
}

function addEvenNumber(number){
  if(isEvenNumber(number)){
    evenNumbers.push(number);
  }
}

addEvenNumber(2);

/*La función isEvenNumber es una función pura, ya que sólo trabaja con el parámetro number y retorna un valor booleano dependiendo de si el número es par o impar.
Por otro lado, la función addEvenNumber no es pura ya que está modificando el arreglo evenNumbers que no forma parte de los parámetros de la función.

Lo primero que debemos hacer es crear una copia de evenNumbers. Para esto podemos usar el método map, el cual crea un nuevo arreglo sin modificar el original. */


var newArray = evenNumbers.map(function(n){
    return n;
  }) 


/*Este método aplica la función que recibe como argumento a todos los elementos del arreglo, como en este caso sólo queremos duplicar el arreglo podemos retornar el mismo elemento.

Ahora que tenemos una copia podemos estar seguros que no estaremos mutando el arreglo original, por lo que podemos usar el mismo método push. */

if(isEvenNumber(number)){
    newArray.push(number);
  }

/*Por último la función retornará este nuevo arreglo y será usado para reemplazar el original. */


var evenNumbers = [];

function isEvenNumber(array, number){
  var newArray = evenNumbers.map(function(n){
    return n;
  });
  if(isEvenNumber(number)){
    newArray.push(number);
  }
  return newArray;
}

evenNumbers = addEvenNumber(evenNumbers, 2);


