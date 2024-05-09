

var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990
  }
  
  
//La segunda forma es más sencilla, ya que sólo se escribe el nombre del objeto seguido de un punto y el nombre de la propiedad
console.log(john['lastName']);  // 'Doe'
console.log(john.firstName);  // 'John'

//También se pueden tener expresiones de funciones dentro de un objeto. En este caso se llama método en lugar de propiedad.


var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function(birthYear) {
      var today = new Date();
      var year = today.getFullYear();
      return year - birthYear;
    }
  }
  
//Estas funciones se llaman o ejecutan de la misma forma que cualquier otra
// función: usando paréntesis después del nombre del método. Como es parte de un objeto se debe utilizar el punto después del nombre del objeto.
  

console.log( john.calculateAge(1990) ); // 30

