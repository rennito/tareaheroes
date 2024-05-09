/*Una función de primera clase es aquella que es tratada como cualquier otra variable,
 es decir, que se puede pasar como argumento a otras funciones, puede ser retornada por otras funciones y puede ser asignada a una variable.
Asignar una función a una variable: Lo hacemos a través de una función anónima: */

const hola= function (){
    console.log("!Hola¡");
}
hola();

/*Pasar la función como argumento: Pasamos la función hola() como argumento a la función saludo().

Una función callback es aquella que se pasa como argumento a otra función, en este caso, hola() es una función callback. */

/*function hola() {
    return "Hola";
}

function saludar (saludo,mnsj){
    console.log(saludo(),mnsj);
}
saludar(hola,",Buenos dias!");*/
///////////////////////////////////////////////////////////////////////////////////////////////
// Las funciones son variables 
var numero = 20 ;
var nombre = "pedro";
var esSoltero = false;

// FUNCION ANONIMA
var sumar = function  (x ,y){
    return x + y ;
}

var num1 = 10 ;
var num2 = 20 ;

var resultado = sumar( 10,20 );

// FUNCIONES COMO PARAMETRO

function aplicar(funcionAAplicar , param1 , param2){
return funcionAAplicar(param1, param2)
}

var resultado2 = aplicar(sumar,10 ,20);


// FUNCIONES COMO RETORNO 

function creaFuncionRestar (){
    return function(x,y){
return x-y;
    };
}

var restar = creaFuncionRestar();

restar (20 , 10);

// Closures
//Currying
