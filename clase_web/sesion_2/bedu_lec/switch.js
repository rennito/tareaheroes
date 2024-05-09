/* Exprecion

switch(expresion){
    case valo1: 
      // Sentencias ejecutadas cuando el resultado de expresion concide con valor1
    break;
    }
    ....
    case valorN:
     // Sentencias ejecutadas cuando el resultado de expresion concide con valorN
    deafult:
     // Sentencias ejecutadas cuando NO ocurrre una coincidencia con los anteriores casos
    }
  */
let expresion = 9;

switch (expresion) {
  case 1:
    console.log("Exprecion esta dentro caso 1");
    break;

  case 2:
    console.log("Exprecion esta dentro caso  2");
    break;

  case 3:
    console.log("Exprecion esta dentro caso 3");
    break;

  default:
    console.log("No se cuentra la exprecion");
    break;
}

let mes = 15;

switch (mes) {
  case 1:  case 2:  case 12:
    console.log("Invierno");
    break;
  case 3:  case 4:  case 5:
    console.log("Primavera");
    break;
  case 6:  case 7:  case 8:
    console.log("Verano");
    break;
  case 9:  case 10:  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Tu mes no corresponde");
    break;
}
