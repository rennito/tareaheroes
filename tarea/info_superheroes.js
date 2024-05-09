const superpoderes = [];
const debilidades = [];

let registrarOtroHeroe = true;
const heroes = [];


// Registro del Heroes

while (registrarOtroHeroe) {


alert("Registrar heroes del mundo");

const nombre = prompt("Nombre del heroe:") ;
const ciudad = prompt("Ciudad del heroe:") ;
const anos_activos = prompt("Años de heroe:") ;
const superpoder = prompt("Tiene superpoderes [si/no]:") ;
const capa = prompt("Usa capa:") ;
const genero = prompt("Genero:") ;
const archienemigo = prompt("Su archienemigo:") ;
const lugar_nacio = prompt("Donde nacio lugar:") ;
const debilidad = prompt("Tiene superpoderes [si/no]:") ;
const herramienta_ataque = prompt("Usa herramientas:") ;


// Instacioa es crear un nuevo obejto apartir de una clase

const heroe = new Heroes (nombre,ciudad,anos_activos,superpoder,capa,genero,archienemigo,lugar_nacio,debilidad,herramienta_ataque);

// Registrar superpoderes

if (superpoder === "si") {
    const numeroSuperpoder = prompt("Cuantos Superpoderes tienes:");

    if (Number(numeroSuperpoder) <= 100) {

        alert(`Genial ${heroe.nombre} Vamos a registrar tus superpoderes`);

        for (let i = 0; i < Number(numeroSuperpoder); i++) {
            const nombre_superpoder = prompt("Super poder:");           
            const superpoder = { nombre: nombre_superpoder }; 
            heroe.guardarSuperpoder(superpoder); 
        }
        heroe.verSuperpoder();

        alert("muchas gracias por su registro")

    } else {
        alert("El número de superpoderes es demasiado grande.");
    }

} else if (superpoder === "no") {
    alert("No tienes superpoderes. ¡Gracias por tu registro!");

} else {
    alert("La respuesta no es válida.");
}

// Registrar debilidades

if (debilidad === "si") {
    const numeroDebilidades = prompt("Cuantas Debilidades tienes:");

    if (Number(numeroDebilidades) <= 100) {

        alert(`Genial ${heroe.nombre} Vamos a registrar sus debilidades`);

        for (let i = 0; i < Number(numeroDebilidades); i++) {
            const nombre_debilidad = prompt("Debilidad:");           
            const debilidad = { nombre: nombre_debilidad }; 
            heroe.guardarDebilidad(debilidad); 
        }
        heroe.verDebilidad();

        alert("muchas gracias por su registro")

    } else {
        alert("Error.");
    }

} else if (debilidad === "no") {
    alert("No tienes Debilidades.");

} else {
    alert("La respuesta no es válida.");
}

heroes.push(heroe);

  const respuesta = prompt("¿Deseas registrar otro héroe? [si/no]");
  registrarOtroHeroe = respuesta.toLowerCase() === "si";
}

console.log(heroes); 
