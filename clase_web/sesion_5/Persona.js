class Persona{

    constructor(nombre, ciudad, numero_medallas){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numero_medallas = numero_medallas;      
        this.equipo = [];
    }

    verEquipo(){
        if(this.equipo.length === 0){
            console.log ("Equipo vacio");

        }else{
            console.log("Equipo pokemon");
            this.equipo.forEach(pokemon =>{
                console.log(` Nombre: ${pokemon.nombre}`)
            })

        }

        /*
        for (let i=0; i < this.equipo.legth;i++){
            console.log (this.equipo[i].nombre)
        }

        */

    }

    listarInformacion(){
        console.log

    }

    guardarEquipo(equipo){
        this.equipo = equipo;
    }
}