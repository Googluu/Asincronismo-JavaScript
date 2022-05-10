const karen = {
    name: "karen",
    age: 15,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
     this.cursosAprobados.push(nuevoCursito);
    },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  
} 
Student.prototype.aprobarCurso = function (nuevoCursito) {
     this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

// Prototipos con las sintaxis de clases
class Student2 {
   constructor({
       name, 
       age,
       email,
       cursosAprobados = [],
   }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
   }

   
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  } 
}

const miguelito = new Student2({
    email: "miguelito@platzi.com",
    age: 28,
    name: "Miguel",
});

const x = (por, por2) => {
    return por * por2
}
x(2 * 3)
