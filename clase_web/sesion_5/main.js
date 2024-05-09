// funciones constructoras


function Persona() {}

function Humano(nombre, edad, peso, altura, color_cabello, idioma) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.color_cabello = color_cabello;
    this.idioma = idioma;

    // internamente
    this.saluda = function() {
        alert("Hola me llamo: " + this.nombre)
    }

    this.cobrar = function(sueldo) {
        alert("Recibi " + sueldo)
    }
}

// mediante el prototipo
Humano.__proto__.correr = function() {
    let r = true
    let km = 0;
    while(r) {
        km++;
        console.log("km recorridos: ", km)
        const rs = prompt("Un kilometro más: [si/no]")
        r = rs === 'si'
    }
    console.log("kilometros recorridos: ", km)
}