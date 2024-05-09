/*
//Sintaxis

if(condition){
    // Bloque de código cuando se cumple <condicíon>
   }
   else{
   // Bloque de código cuando NO se cumple <condicíon>
   }    
  */

   let celularEncendido = true;

   if (celularEncendido){
    console.log("puedo recibir llamadas");
   }else{
    console.log("no puedo recibir llamdas");
   }

   // && y    || or 

   let tengoDinero = false;

   if(tengoDinero){
    console.log("puedo comprar chetos")
   }else{
    console.log("No puedo comprar nada");
   }


   let semaforo ="Azul";

if(semaforo === "Verde"){
    console.log("Adelante");

}else if(semaforo === "Amarillo"){
    console.log("Cuidado");
}else if (semaforo === "Rojo"){
    console.log("Detente");
}else{
    console.log("Semaforo esta descompuesto");
}