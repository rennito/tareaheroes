//Cuando creamos una clase en nuestro procedimiento,
 //tenemos que utilizar la palabra clave ‘class’. Siempre que la usemos debemos 
 //agregar el método ‘constructor()’, el cual vamos a revisar más adelante.
 
 

class ClassName {
    constructor() { }
    }
    
// ya aplicado

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
//En este ejemplo se crea una clase llamada Car y tiene dos propiedades iniciales: year y name. Hasta este punto cabría hacer dos aclaraciones:
//Una clase de JavaScript no es un objeto. 🚫
//Una clase es una plantilla para objetos de JavaScript. ✅

//Constructores e instancias
//Como podrás observar, se crearon tres objetos individualmente, pero te has preguntado, ¿cómo podemos optimizar este proceso?


var john = {
    name: 'John',
    birthYear: 1990,
    job: 'Developer'
  }
  var mark = {
    name: 'Mark',
    birthYear: 1985,
    job: 'Teacher'
  }
  var jane = {
    name: 'Jane',
    birthYear: 1975,
    job: 'Designer'
  }
  
  //Para optimizar el proceso, podemos utilizar los constructores,
  // éstos nos permiten que, en lugar de crear 3 objetos, podemos usar una plantilla (constructor) 
  //a partir de la cual podremos instanciar múltiples objetos.
  
  //Para optimizar el proceso, podemos utilizar los constructores, éstos nos permiten que, en lugar de crear 3 objetos,
  // podemos usar una plantilla (constructor) a partir de la cual podremos instanciar múltiples objetos.

  
var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }
  
//Los tres parámetros de la función son las propiedades que queremos que tenga nuestro objeto. Para instanciar un objeto a partir de este constructor debemos usar el operador new.

  
var john = new Person('John', 1990, 'Developer');
var mark = new Person('Mark', 1985, 'Teacher');
var jane = new Person('Jane', 1975, 'Designer');



  