/*for(i=0 ; i<5; i++){
    console.log(i);
}*/

//Arreglo_numeros

/*arreglo_numeros =[0,8,1,3,2,50,98,100];
colores = ["rojo","azul","verde"]
console.log(arreglo_numeros[4]);
console.log(arreglo_numeros.length);

for (i=0; i<arreglo_numeros.length; i++){
console.log(arreglo_numeros[i])
}

for (i=0; i<colores.length; i++){
    console.log(colores[i])
    }
    */

/*colores=["rojo","verde","azul"];
colores.forEach(element => {
    console.log(element)
});

colores2=["rojo","verde","azul","naranja","blanco"];
colores2.forEach(function(colores,index) {
    console.log(`${index} => ${colores} `)

    console.log(index +"=>"+ colores)
});

*/

/*dias=[
    {nro:1,dia:"Lunes", mes :"ENERO"},
    {nro:2,dia:"Martes",mes :"FEBRERO"},
    {nro:3,dia:"Miercoles"},
    {nro:4,dia:"Jueves"},
    {nro:5,dia:"Viernes"},
    {nro:6,dia:"Sabado"},
    {nro:7,dia:"Domingo"},
];

dias.map(function(dias){
 console.log(dias.nro+"=>"+dias.dia+"-"+dias.mes);
});
*/

/*var amigos=["Carlos","Cesar","Oscar","Mario"];
// en pantalla seria 
//document.write(amigos[0]);
amigos[0]="Francisco";
console.log(amigos[0])
console.log(amigos)*/


const productos =[
    {id:1, name:"Bicicleta", price : 110},
    {id:2, name:"Macbook pro", price : 700},
    {id:3, name:"altavoces", price : 20},
    {id:4, name:"raton", price : 50},
    {id:5, name:"ordenador", price : 500},
    {id:6, name:"libreta", price : 300},
    {id:7, name:"calculadora", price : 10},
];

const filtered = productos.filter((producto) =>{
return producto.price > 500;
});
console.log(productos);
console.log(filtered);

const ids = productos.map((producto) => {
    return producto.name;    
})

console.log(ids);

const producto = productos.find((producto) => {
    return producto.id == 5;    
})
console.log(producto);


productos.forEach(producto => {
    console.log(producto.price)
});

const hasExpensiveProducto = productos.some((productos) => {
return productos.price >100;
});
console.log(hasExpensiveProducto);


const hasExpensiveProductos = productos.every((productos) => {
    return productos.price >1;
    });
    console.log(hasExpensiveProductos);


const total = productos.reduce((acc, productos) => {
return productos.price + acc; // 0+110  = 110  ahora  110+700 
},0);

console.log(total);