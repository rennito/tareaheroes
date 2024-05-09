//mutabilidad e inmutabilidad


// Metodo que me permite agregar un nuevo elemento al arreglo

/*let numeros = [];

numeros.push(5);

numeros.push(10);

numeros.push(15);

console.log("numeros",numeros);// [5,10,15]

let numeros1 = [ ... numeros,5];

let numeros2 = [ ... numeros1, 10];

let numeros3 = [ ... numeros2, 15];

console.log("numeros",numeros);// [5,10,15]*/

// site efectt o efecto secundario es aque que se produce cuando se prduice el puish una accion percuta a un valor 

//let resultado = 0;

/*function sumadenumeros(a,b ){
 // resultado = a+b;
 return a+b
}

let resutlado =sumadenumeros(9,8)*/

// Funciones puras

/*function potencia (base, exponete){
return Math.pow(base, exponete)

}

console.log(potencia(4,6));//4096
console.log(potencia(3,7));//2189
console.log(potencia(2,2));//4
console.log(potencia(3,7));//2189*/


//metodos funcionales
// ARREGLOS
// callbacjs son funciones que se reciben de otra funcion 

// foreach para recorrer un arreglo 

// for se inica  y el incremento

// FOREACH

/*const nombres =["Pedro","Manuel","Antonio","Grabriela","Camila"];

for (let i=0 ; i< nombres.length; i++){
    console.log (nombres[i])
}

nombres.forEach((elemento, poscicion, arreglo)=> {
    console.log(elemento)
    console.log(poscicion)
    console.log(arreglo)
});*/
//"Pedor"
// 0
//["Pedro","Manuel","Antonio","Grabriela","Camila"]
//"Manuel"
//"Antonio"
//"Gabriela"
//"Camila"

// MAP EL BUENO
// meotdo funcional que va permitr recorrer el arreglo y regresar un nuevo aareglo del mismo 
// numero de elementos con posiblemente el mismo contenido

// sintaxxis  array.map((elemento,posicion,arreglo)=> {})

let calificaciones = [10,10,9,8,7.5,5,7,8];
// cualquier calificacion menor de  que  8 reprueba

const deliberaciones = calificaciones.map((calificacion, poscicionm, arreglo)=> {
    if(calificacion >= 8 ){
    return "Aprobado"; 
    }
    return "Reprobado";
});
 console.log(deliberaciones)



 // FILTER
 // METODO FUINCUOAN QUE PERMITE FILTRAR EL CONTENIDO DE UN ARRGIELO
 // REGRESA UN ARREGLO DEL MISMO NUMERO DE ELEEMENTOS  , MENOR CANTIDAD ELEIEMNTOS O NINGUNO
 // SI CON EL MISMO CONTENIDO
// SINTAXIX  array.filter((elemento,posicion,arreglo) => {});

// SOLO OBTENER LAS CALICACIONES APROBAROTRIAS

const aprobadas = calificaciones.filter((calificacion,poscicion, arreglo) =>{
    if(calificacion>= 8){
        return calificacion
    }
});

console.log(aprobadas)

// Reduce 
//metodo funciona que permite regresar cualquier tipo de dato valido en JS
//es decir de un arreglo poder regresar cualquier tipo de valor 
// SINTAXIS  array.radece((acum, elemento, posiccion, arreglo)=> {})
//array.radece((acum, elemento, posiccion, arreglo)=> {}, valorincial)

// valor inciial dificne el tipo de dato que regresa al final 

// si no define el segundo parametro (valor incila), 
//en mi collback el primer parametro en la priemra itreacions sera el valor incial, 
//elemento mi segundo parametro se recibe el valor de la pocicon  0 de mi arreglo

//let calificaciones = [10,10,9,8,7.5,5,7,8];

//calificacion.reduce((acum,elemento,poscicio,arreglo)=>{
// return acum +elemento // 0+10
//},0)

//calificacion.reduce((acum,elemento,poscicio,arreglo)=>{
// return acum +elemento // 10+10
//},0)

// si yo no defino el segundo paramentro en mi callbackj
// en la priemra interacion el primer parametro recibe laposicion 0de mi arreglo
// el segundo paramatro del callback recive pocicion 1 de arreglo

//let calificaciones = [10,10,9,8,7.5,5,7,8];
// return actum+elemento // 10+10 = 20 


// return actum+elemento // 20+9 = 29 

// return actum+elemento // 29+8 =  

// para las siguiente iteraciones el primero paramentro del callback
// recibe lo que me reotrne del callback 
// el segundo paramantro de mi callback recibe la siguiente posicion iterable.


const alumnos = [
    {
      nombre: "Pedro",
      materias: [
        {
          nombre: "Español",
          calificacion: 7
        },
        {
          nombre: "Ciencias",
          calificacion: 10
        },
        {
          nombre: "Historia",
          calificacion: 8
        },
      ],
      grado: "4",
      grupo: "A"
    },
    {
      nombre: "Gabriela",
      materias: [
        {
          nombre: "Español",
          calificacion: 9
        },
        {
          nombre: "Matematicas",
          calificacion: 9
        },
        {
          nombre: "Historia",
          calificacion: 10
        },
      ],
      grado: "4",
      grupo: "B"
    },
    {
      nombre: "Rodolfo",
      materias: [
        {
          nombre: "Ingles",
          calificacion: 9
        },
        {
          nombre: "Ciencias",
          calificacion: 8
        },
        {
          nombre: "Matematicas",
          calificacion: 10
        },
      ],
      grado: "5",
      grupo: "A"
    },
    {
      nombre: "Rodrigo",
      materias: [
        {
          nombre: "Español",
          calificacion: 9
        },
        {
          nombre: "Historia",
          calificacion: 9
        },
        {
          nombre: "Ingles",
          calificacion: 10
        },
      ],
      grado: "5",
      grupo: "B"
    },
    {
      nombre: "Gustavo",
      materias: [
        {
          nombre: "Español",
          calificacion: 8
        },
        {
          nombre: "Ingles",
          calificacion: 6
        },
        {
          nombre: "Ciencias",
          calificacion: 10
        },
      ],
      grado: "5",
      grupo: "B"
    },
    {
      nombre: "Cristian",
      materias: [
        {
          nombre: "Ingles",
          calificacion: 8
        },
        {
          nombre: "Matematicas",
          calificacion: 9
        },
        {
          nombre: "Español",
          calificacion: 10
        },
      ],
      grado: "6",
      grupo: "B"
    },
  ];


 // Requerimos conocer los alumnos de los grupos B FILTER


 const alumnosGrupoB = alumnos.filter(alumno => alumno.grupo === 'B');
console.log(alumnosGrupoB);


  //Requerimos conocer los alumnos que cursan Matematicas FILTER


  const alumnosMatematicas = alumnos.filter(alumno =>
    alumno.materias.some(materia => materia.nombre === 'Matematicas')
  );
  console.log(alumnosMatematicas);


  // Requerimos conocer el nombre de todos los alumnos .MAP


  const nombresAlumnos = alumnos.map(alumno => alumno.nombre);
console.log(nombresAlumnos);
 
  
  // // Requerimos sacar el promedio de cada materia sin importar grado y grupo REDUCE

  const promediosPorMateria = alumnos.reduce((resultados, alumno) => {
    alumno.materias.forEach((materia) => {
      if (!resultados[materia.nombre]) {
        resultados[materia.nombre] = { total: 0, cantidad: 0 };
      }
      resultados[materia.nombre].total += materia.calificacion;
      resultados[materia.nombre].cantidad++;
    });
    return resultados;
  }, {});
  
  for (const materia in promediosPorMateria) {
    const promedio = promediosPorMateria[materia].total / promediosPorMateria[materia].cantidad;
    console.log(`Promedio de ${materia}: ${promedio}`);
  }

/*
Inicialización del objeto promediosPorMateria:
promediosPorMateria se inicializa como un objeto vacío que almacenará los resultados de los promedios por materia.

Utilización de reduce para calcular los promedios:
El método reduce itera sobre el array de alumnos.
Para cada alumno, se utiliza forEach para iterar sobre sus materias.
Dentro de la iteración de materias, se comprueba si la materia ya está en resultados (que inicialmente es promediosPorMateria). Si no está, se inicializa con una suma total de calificaciones en 0 y una cantidad de materias en 0.
Luego, se acumula la calificación de la materia en la suma total y se incrementa la cantidad de materias.

Cálculo de los promedios:
Después de completar el reduce, el código itera sobre el objeto promediosPorMateria usando un bucle for...in.
Para cada materia, calcula el promedio dividiendo la suma total de calificaciones (total) por la cantidad de veces que aparece la materia (cantidad).
Finalmente, se muestra en la consola el promedio de cada materia.
Este enfoque es efectivo para calcular los promedios de manera acumulativa mientras se recorre el array de alumnos y sus materias, evitando tener que hacer múltiples iteraciones o bucles adicionales.
 */ 


  //Requerimos conocer el nombre, grado y grupo de los alumnos que reprobaron ciencias (calificacion menor a 7) REDUCE 

  const alumnosReprobadosCiencias = alumnos.reduce((reprobados, alumno) => {
    const califCiencias = alumno.materias.find(materia => materia.nombre === 'Ciencias');
    if (califCiencias && califCiencias.calificacion < 7) {
      reprobados.push({
        nombre: alumno.nombre,
        grado: alumno.grado,
        grupo: alumno.grupo,
      });
    }
    return reprobados;
  }, []);
  
  console.log(alumnosReprobadosCiencias);

/**
Inicialización del array alumnosReprobadosCiencias:
Se inicia como un array vacío ([]) donde se almacenarán los alumnos que han reprobado en Ciencias.

Utilización de reduce para filtrar alumnos reprobados:
El método reduce itera sobre el array de alumnos.
Para cada alumno, se utiliza el método find en el array de materias para buscar la materia con nombre 'Ciencias'.
Si se encuentra la materia y su calificación es menor a 7, se agrega un objeto con el nombre del alumno, su grado y grupo al array reprobados.
Al final, reduce devuelve el array reprobados.

Impresión de los alumnos reprobados en Ciencias:
Después de completar el reduce, se muestra en la consola el array alumnosReprobadosCiencias, que contiene la lista de alumnos que han reprobado en la materia de Ciencias.
Este código es útil para filtrar y obtener información específica de los alumnos que no han alcanzado el nivel deseado en una materia determinada, en este caso, Ciencias con una calificación menor a 7.
 */

 // Requerimos conocer el grupo con mejor promedio Reduce 

// Función para calcular el promedio de un grupo//
const calcularPromedioGrupo = (alumnosGrupo) => {
    const totalCalificaciones = alumnosGrupo.reduce((total, alumno) => {
      const calificaciones = alumno.materias.map(materia => materia.calificacion);
      const sumCalificaciones = calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
      return total + (sumCalificaciones / calificaciones.length);
    }, 0);
    return totalCalificaciones / alumnosGrupo.length;
  };  
  // Calcular el promedio de cada grupo//
  const gruposPromedios = alumnos.reduce((grupos, alumno) => {
    const grupoExistente = grupos.find(grupo => grupo.nombre === alumno.grupo);
    if (grupoExistente) {
      grupoExistente.alumnos.push(alumno);
    } else {
      grupos.push({ nombre: alumno.grupo, alumnos: [alumno] });
    }
    return grupos;
  }, []).map(grupo => ({ nombre: grupo.nombre, promedio: calcularPromedioGrupo(grupo.alumnos) }));
    // Encontrar el grupo con el mejor promedio//
  const grupoMejorPromedio = gruposPromedios.reduce((mejorGrupo, grupo) => {
    if (!mejorGrupo || grupo.promedio > mejorGrupo.promedio) {
      return grupo;
    }
    return mejorGrupo;
  }, null);
  
  console.log(grupoMejorPromedio);





// Requerimos conocer a todos los alumnos que cursan historia, queremos saber que grado, que grupo y cual fue su promedio del alumno



  
  

  
  