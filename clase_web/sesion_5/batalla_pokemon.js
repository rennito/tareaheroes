const pokemones = [];

// Registro del entrenador

alert("Bienvenido Entrenador, registrate para poder participar");

const nombre = prompt("Nombre completo:") ;
const medallas = prompt("Numero de medallas:") ;
const ciudad = prompt("Nombre de la ciudad:") ;

const peleas_ganadas = prompt("Numero de peleas Ganadas:") ;
const peleas_perdidas = prompt("numero de peleas Perdidas:") ;
const gimnacio = prompt("Nombre gimnacio:") ;



// Instacioa es crear un nuevo obejto apartir de una clase

const entrenador = new Entrenador (nombre, medallas,ciudad,peleas_ganadas,peleas_perdidas,gimnacio);

alert(`Genial ${entrenador.nombre} vamos a registrar a tu equipo]`);

const numeroPokemon = prompt("Cunatos pokemones registraras:");

if(Number(numeroPokemon) <=6){

for (let i = 0 ; i <Number(numeroPokemon); i++){
    const nom = prompt("Nombre del pokemon:");
    const tipo = prompt("Tipo:");
    const tamano = prompt("Tamaño:");
    const genero = prompt("Genero:");
    const ataque = prompt("Ataque:");
    const defensa = prompt("Defensa:");
    const pokemon = new Pokemon(nom,tipo,tamano,genero,ataque,defensa);
    pokemones.push(pokemon);
}
    entrenador.guardarEquipo(pokemones);

    entrenador.verEquipo();

    alert("muchas gracias por su registro")

}

