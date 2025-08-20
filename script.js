// Objetos en JS
// Permiten guardar distintos tipos de datos en una sola variable.
// Sirven para agrupar datos y funcionalidades.

// Constructor con clase
class Estudiante {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}

// Crear instancias del objeto Estudiante
let estudiante1 = new Estudiante("Katherin", "Romero", 20);
console.log(estudiante1.nombreCompleto());

let estudiante2 = new Estudiante("Camilo", "Romero", 25);
estudiante2.telefono = "3504317565"; // Se añade una nueva propiedad al objeto

// Constructor con función
function Profesor(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.asignatura = "Matemáticas";
}

// Crear una instancia del objeto Profesor
let profesor1 = new Profesor("Alberto", "Pérez", 40);

// Llamar al método nombreCompleto del estudiante usando call con el contexto de profesor1
console.log(estudiante1.nombreCompleto.call(profesor1));

// Mostrar objetos en consola
console.log(estudiante1);
console.log(estudiante2);
