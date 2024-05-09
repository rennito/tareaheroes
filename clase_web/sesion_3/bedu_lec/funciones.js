
function suma(num1, num2){
    var resultado = num1 + num2;
    console.log("El resultado es " + resultado);
   }

   // En este sentido, la sintaxis para poder llamar a una función es:

   function myFunction(parameter1, parameter2) {
    // Código a ejecutar
    }

   //En JavaScript hay otra sintaxis para las funciones que se conoce como expresión de función. Estas normalmente son funciones anónimas (la función como tal no tiene nombre) asignadas
   // a una variable. Al declarar estas funciones estamos realizando su llamada o ejecución.  "ARGUMENTOS"
    
    var addNumbers = function(a, b) {
        return a + b
        }
        
        var result = addNumbers(5, 8);
        
        console.log( result ); // 13

        //A veces es necesario que la expresión de la función no sea anónima. 
        // Por ejemplo, en una función recursiva donde es necesario hacer referencia a sí misma.

        

 var factorial = function fac(number) {
    return number < 2 ? 1 : number * fac(number - 1)
  }
  
  console.log(factorial(5)); // 120
  
  