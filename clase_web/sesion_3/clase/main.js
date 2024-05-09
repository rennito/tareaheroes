// funciones
// reglas y convenciones
// nombres:caracteres al principio diferente de numero  punto y coma
// cualquier caracter no especial (ñ, -+*)


// sintaxis
//function name(){}

// Impresion de un mensaje

/*function mensaje(){
        alert("hola");
       
}
mensaje();*/

//PARAMETROS
function sumaNumeros(numero1 = 0, numero2 =3.14, numero3){
    numero1 = !numero1 ? 0: numero1;
    numero2 = !numero2 ? 3.14: numero2;
    console.log(numero1) 
   console.log(numero2)
   console.log(numero3)  
   console.log(numero1 + numero2 + numero3);
   }
sumaNumeros(null, null, 2);//5.14

// prueba de escritorio
// numero1=  2
// numero2= 3
// numero1+numero2=5

//PARAMETRO REST
function sumaResta (...numeros){
    console.log("num", numeros)
}
sumaResta(5,6,7,8,8,9,3,3,2,2,2);

// FUNCION ANONIMA
//function(){}
// asignadolas a una variable o a una propiedad

// Nos diga si una persona peuda vota

const evaluaEdad =function votar(edad){
    if (edad >=18){
        alert("puedes votar");
    }else{
        alert("no puede votar");
    }
}

evaluaEdad();

// obentos porpiedads y metodas

const maria = {
    nombre:"maria",
    hablar:function(){}
}

maria.hablar();


// RETURTN
function sumaNumeros(numero1 = 0, numero2 =3.14, numero3){
   // numero1 = !numero1 ? 0: numero1;
    //numero2 = !numero2 ? 3.14: numero2;
    console.log(numero1) 
   console.log(numero2)
   console.log(numero3)  
  return numero1 + numero2 + numero3;
   }
const resutlado = sumaNumeros(undefined, undefined ,2);


// Funciones de flechas o arrow fuction.
// one line , sintaxis de una sola linea.
// return implicito
// sintasxis = ()=>{}

const funcion = (numero1 = 0, numero2 =3.14, numero3) => numero1 + numero2 + numero3

console.log("arrow---", funcion (undefined, undefined,2))

const funcion1= (numero1 = 0, numero2 =3.14, numero3)=>{
console.log(numero1)
console.log(numero2)
console.log(numero3)
return numero1 + numero2 + numero3
}

const funcion2 = (_, parametro) => alert("desde arrowfunction");
funcion2("accion", "ahora");