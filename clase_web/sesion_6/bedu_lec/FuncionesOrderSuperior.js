/*
filter selecciona elementos a través de un enunciado booleano. Crea un nuevo arreglo sin necesidad de modificar el original.
Veamos un ejemplo sencillo:

Tenemos un arreglo de números [1,2,3,4,], aplicando el filtro que definimos item>3 nos queda únicamente el número 4. Esto es porque la función filter sólo define la condición de filtrado para eliminar elementos de la lista*/

var lista =[1,2,3,4];
var listaFilter =lista.filter(function(item){
    return item > 3;
})

console.log(listaFilter);


var listaFilter =lista.filter((current)=>{
    return (current % 2 === 0);
})

console.log(listaFilter);

/*map aplica la misma función sobre una colección pero no modifica la colección original, devuelve una nueva.
Utilizando el mismo arreglo de números, vamos a transformarlo utilizando map a través de una función. En este caso multiplicamos cada elemento del arreglo por 3: */

var listaMap =lista.map(function(item){
    return item* 3;
})
console.log(listaMap)

/*reduce acumula elementos en un único valor según una función dada.
Por último, con esta función lo que se hace es recorrer el arreglo e ir acumulando un resultado final. Puede ser:
 */

//Sumatorio

var suma =lista.reduce(function(acumulador,item){
    return item + acumulador;
})
console.log(suma)

// MULTIPLICADOR

var multi = lista.reduce(function(acumulador,item){
    return item * acumulador;
})
console.log(multi)

//Entre otros:

var resta = lista.reduce(function(acumulador,item){
    return acumulador- item;
})
console.log(resta)

var resta = lista.reduce(function(acumulador,item){
    return acumulador / item;
})
console.log(resta)


const sum = lista.reduce((acumulador, current)=>{
    return acumulador + current
})
console.log(sum)