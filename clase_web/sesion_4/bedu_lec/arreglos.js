
var colors = ['Red', 'Green', 'Blue'];

console.log(colors[0]); //'Red'
console.log(colors[1]); //'Green'
console.log(colors[2]); //'Blue'
console.log(colors[3]); //'Undefined'    

// 2. La segunda manera permite establecer el número de posiciones e indicar sus elementos:

var colors = new Array(5);

// Hemos indicado que el arreglo colors puede contener hasta 5 elementos pero también podemos definirlos de la siguiente manera:


var colors = new Array("Red","Green","Blue");

//Acceder a un elemento y recorrer un arreglo

//Podemos acceder a un elemento específico del arreglo haciendo uso del índice. Por ejemplo, si queremos imprimir en consola el primer y último elemento de nuestro arreglo colors:


console.log(colors[0]); //Red
console.log(colors[colors.lenght - 1]); //Blue

// O simplemente almacenarlos en una variable para ocuparlos después:


/*var primero = colors.[0]; //Red 
var ultimo = colors.[colors.length-1]; //Red*/

//Para recorrer un arreglo hacemos uso de los ciclos. El más utilizado forEach, la versión moderna y reducida del for.


 //Recorre un arreglo utlizando ForEach
 /*colors.forEach(function("elemento, indice, array"){
    console.log(elemento, indice);
   })*/
  
   //Utilizando el clásico for:

   

 //Recorre un arreglo utlizando For
 /*for (var i=0; i<colors.lenght; i++;){
    console.log(colors[i] + " " + i);
   }
  

   
   // Obtenemos la misma salida en ambos casos:
   

 // Red 0
 // Green 1
 // Blue 1
*/



  