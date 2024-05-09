/*Ejercicio: Crear la clase Entrenador:
nombre
Ciudad
Numero de medallas
Listar Equipo
Elegir un pokemon
Retirar un pokemon
Ademas agregar 3 nuevas propiedades y 3 metodos más (editado) */

class Entrenador extends Persona{

    constructor(nombre, ciudad, numero_medallas,peleas_ganadas,peleas_perdidas,gimnacio){
        super(nombre, ciudad, numero_medallas);
        this.peleas_ganadas = peleas_ganadas;
        this.peleas_perdidas = peleas_perdidas;
        this.gimnacio = gimnacio;
        
        
    }
    
    elegir_pokemon(){}

    retirar_pokemon(){}

    curar_pokemon(){}

    super_ataque(){}

    defensa_pokemon(){}


}