//Veamos un ejemplo para diferenciar código imperativo y declarativo.

var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

//Generalmente usar ciclos es programación imperativa pues queda del lado del programador controlar cuándo iniciar,
// cuándo terminar y qué hacer en cada ciclo. Es decir, el programador describe el cómo se debe resolver un problema.


var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.map(function(number) {
  return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

//Por otro parte y a diferencia de la programación imperativa, en la forma declarativa el programador no se preocupa
// por controlar cuándo y dónde terminar el ciclo, sólo se encarga del resultado esperado. En otras palabras,
// el programador se enfoca en qué resultado se quiere alcanzar sin definir explícitamente el cómo se hará.