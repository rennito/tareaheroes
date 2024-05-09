class Buscarheroes {
    constructor(nombre, ciudad, genero) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.genero = genero;
    }

    buscar_heroes(opcion, valor) {
        if (opcion === "nombre") {
            if (this.nombre.toLowerCase() === valor.toLowerCase()) {
                console.log("Heroe encontrado:");
                console.log(this);
            } else {
                console.log("Heroe no encontrado.");
            }
        } else if (opcion === "ciudad") {
            if (this.ciudad.toLowerCase() === valor.toLowerCase()) {
                console.log("Heroe encontrado:");
                console.log(this);
            } else {
                console.log("Heroe no encontrado.");
            }
        } else if (opcion === "genero") {
            if (this.genero.toLowerCase() === valor.toLowerCase()) {
                console.log("Heroe encontrado:");
                console.log(this);
            } else {
                console.log("Heroe no encontrado.");
            }
        } else {
            console.log("Opción de búsqueda no válida.");
        }
    }
}

const heroe = new Buscarheroes(nombre, ciudad, genero);

document.getElementById('buscarHeroesBtn').addEventListener('click', function() {
    const opcionBusqueda = prompt('Seleccione la opción de búsqueda (nombre, ciudad, genero):');
    const valorBusqueda = prompt('Ingrese el valor a buscar:');

    heroe.buscar_heroes(opcionBusqueda, valorBusqueda);
    
});