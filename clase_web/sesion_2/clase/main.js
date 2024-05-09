// Estructuras de control

// Condicionales
// condicionar entre flujo y otro
// if, if else, if else if else, switch, ternario 

// if
// sintaxis: if (expresion boolean) { body }

// votar
// mas de 18 años
const edad = 18;
if (edad >= 18) {
  console.info("Puedo votar");
}

const valor = 89;

// if (valor == null) {
//   console.info("Esta variable esta vacia");
// }

// if else
// sintaxis: if () {} else {}
if (valor == null) {
  console.info("Esta variable esta vacia");
} else {
  console.info("Esta variable no esta vacia");
}

// if else if
// sintaxis: if () {} else if () {}

// puedo votar cuando tenga mas de 18 años
// cuando tengas 18 te daran tu credencial
if (edad == 18) {
  console.info("toma tu credencial")
} else if (edad > 18) {
  console.info("puedes votar")
} else {
  console.info("no puedes votar");
}

// anidación


// sintaxis: switch(value) { case n: break; default: break; }
// if() else if() {} else {}

// agencia de viajes
// 5 destinos
// cdmx $50
// monterrey $200
// yucatan $300
// oaxaca $400
// sinaloa $400

const destino = "sinaloa";
let costo = 0;

switch(destino) {
  case "cdmx":
    costo = 50;
    break;
  case "monterrey":
    costo = 200;
    break;
  case "yucatan":
    costo = 300;
    break;
  case "oaxaca":
  case "sinaloa":
    costo = 400;
    break;
  default:
    costo = 'No disponible';
    break;
}

console.info("el precio es: $", costo);

// prompt
// sintaxis: prompt('Proporciona tu edad:')
// retorno un valor
// guardarlo en  una variable
// el valor que retorna el prompt es de tipo string

/*const edad1 = prompt('Proporciona tu edad:');
console.info("edad1", edad1)*/

//ternario
// sintasis expresion ? verdadera : falsa;

/*if (valor == null) {
    console.info("Esta variable esta vacia");
  } else {
    console.info("Esta variable no esta vacia");
  }*/
  valor == null ? console.info("Esta variable esta vacia") : console.info("Esta variable no esta vacia");

  //  objetivos: asignacion de valores
console.info(valor == null ? "Esta variable esta vacia" : "Esta variable no esta vacia");


// Iterativas
// ejecutar un conjunto de líneas de código n número de veces
// for, while, for of, for in

// for
// sintaxis : for (inicio;condicion;incremento o decremento) {}
// imprimir secuencia de numero del  1 al 20

for(let i=1; i <=20; i++){
     //  1
 console.log(i)
    // i=2
      
}

const nombre = "Pedro";// n-1
for (let i=1 ; i <nombre.length; i++){
    console.log (nombre[i])
}

// Solicitarle al usuario su nombre completo
//cambiar todas las vovales de muinuscula a mayusculas
// los string nombre.toUpperCase toLowerCase


let nombreCompleto = prompt('Proporciona tu Nombre completo:');
console.info("nombreCompleto", nombreCompleto)
let nombreMayuscula = "";
for (let n=0; n <nombreCompleto.length; n++){
    if (nombreCompleto[n] == "a"|| nombreCompleto[n] == "e"|| nombreCompleto[n] == "i"|| nombreCompleto[n] == "o"|| nombreCompleto[n] == "u") 
    {nombreMayuscula += nombreCompleto[n].toUpperCase() 
        
    }else{
        nombreMayuscula += nombreCompleto[n]
    }
}
console.log(nombreMayuscula);

// while
//sintaxis : while(expr) { }

let n = 0;

while(n < nombreCompleto.length){
    if (nombreCompleto[n] == "a"|| nombreCompleto[n] == "e"|| nombreCompleto[n] == "i"|| nombreCompleto[n] == "o"|| nombreCompleto[n] == "u") 
    {nombreMayuscula += nombreCompleto[n].toUpperCase() 
        
    }else{
        nombreMayuscula += nombreCompleto[n]
    }    
    n++;
}
console.log(nombreMayuscula);

// suma de numeros
// preguntale al usuario por un numero 
// quieres sumar otro numero 
// su el usuario dice que si, preguntar por un nuevo numero.
// si el usuario dice que no imprirmir la suma

let respuesta = "s";
let acum = 0;

while(respuesta == "s"){
    const num = prompt ("proporciona un numero:")
    acum += Number(num);
    respuesta = prompt("quieres sumar otro numero:[s/n]")
}
console.info("suma:", acum);

