/*Ejercicio para fin de semana:
El mundo necesita tener un registro de heroes, requerimos conocer la siguiente información:
Nombre del heroe
Ciudad de origen
Años activo
Tiene superpoderes
Si tiene superpoderes, solicitar todos los superpoderes
Usa capa
genero
Archienemigo
Nacio en la tierra
Debilidades, solicitar todas las debilidades
Usa herramientas

El sistema debe funcionar tanto para hacer búsquedas como para registrar superheroes, 
si se desea buscar, tengo tres opciones de búsqueda, por nombre, Ciudad de origen o genero,
en cualquiera de los 3 casos, debe arrojarme una lista de los superheroes que resulten como parte de la búsqueda,
además debo poder ver la información de cualquier superheroe de la lista resultante de la búsqueda,
el sistema seguirá activo hasta que el usuario decida apagar el sistema,
y al terminar cualquier búsqueda debo regresar a la opción principal que permite o buscar o registrar heroes */

class Heroes {
  constructor(
    nombre,
    ciudad,
    anos_activos,
    superpoder,
    capa,
    genero,
    archienemigo,
    lugar_nacio,
    debilidad,
    herramienta_ataque
  ) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.anos_activos = anos_activos;
    this.superpoder = superpoder;
    this.capa = capa;
    this.genero = genero;
    this.archienemigo = archienemigo;
    this.lugar_nacio = lugar_nacio;
    this.debilidad = debilidad;
    this.herramienta_ataque = herramienta_ataque;
    this.superpoderes = [];
    this.debilidades = [];
  }

   
  guardarSuperpoder(superpoder) {
    this.superpoderes.push(superpoder);
  }

  verSuperpoder() {
    if (this.superpoderes.length === 0) {
      console.log("Sin superpoder");
    } else {
      console.log("Superpoderes");
      this.superpoderes.forEach((superpoder) => {
        console.log(`${superpoder.nombre}`);
      });
    }
  }

  guardarDebilidad(debilidad) {
    this.debilidades.push(debilidad);
  }

  verDebilidad() {
    if (this.debilidades.length === 0) {
      console.log("Sin debilidad");
    } else {
      console.log("Debilidades");
      this.debilidades.forEach((debilidad) => {
        console.log(`${debilidad.nombre}`);
      });
    }
  }
}
