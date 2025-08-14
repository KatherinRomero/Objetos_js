// Objetos en JS
// Guardar distintos tipos de datos en una sola variable
// Sirven para agrupar datos y funcionalidades

// Constructor
function Estudiante(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;

  this.nombreCompleto = function() {
    return this.nombre + " " + this.apellido;
  };
}

// Crear una instancia del objeto
let estudiante1 = new Estudiante("Katherin", "Romero", 20);
console.log(estudiante1.nombreCompleto());

let estudiante2 = new Estudiante("Camilo", "Romero", 25);
estudiante2.telefono = "3504317565";

function Profesor(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.asignatura = "Matemáticas";
} 

// Call
let profesor1 = new Profesor("Alberto", "Pérez", 40);
console.log(estudiante1.nombreCompleto.call(profesor1)); // Llama a la función nombreCompleto del estudiante1 por medio de call

console.log(estudiante1);
console.log(estudiante2);
