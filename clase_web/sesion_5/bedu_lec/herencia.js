//Herencia
//Los objetos también pueden tomar prestadas propiedades de otro objeto.
//A esto se le llama herencia. Un constructor puede heredar propiedades de otro.


var Person = function(name) {
    this.name = name;
  }
  var Developer = function(skills, yearsOfExperience) {
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
  }
  
  //Si queremos que el constructor Developer herede la propiedad name de Person usamos el método call() el cual ejecuta el constructor padre.

  

var Person = function(name) {
    this.name = name;
   }
   
   var Developer = function(name, skills, yearsOfExperience) {
     Person.call(this, name);
   
     this.skills = skills;
     this.yearsOfExperience = yearsOfExperience;
   }
   
   var john = new Developer('John', 'JavaScript', 10);
   
   
   //De esta forma creamos un objeto john que es una instancia de Developer. Es importante tomar en cuenta que John no es una instancia 
   //de Person aunque tenga las mismas propiedades, estas sólo fueron prestadas o heredadas durante la creación del objeto.