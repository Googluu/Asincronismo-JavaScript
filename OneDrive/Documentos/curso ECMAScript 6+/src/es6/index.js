function newFunction(name, age, country) {
    var name = name || "Sneyder";
    var age = age || 17;
    var country = country || "Colombia";
    console.log(name, age, country);
}

// Ahora con ES6 se realiza asi: 
function newFunction2(name = "Sneyder", age = 17, country = "Colombia") {
    console.log(name, age, country);
}
//Para llamar la función hay dos formas:
//Para el primer caso hay funciones que toman los atributos por si mismos, entonces se pueden dejar vacias. 
newFunction2();
newFunction2("Ricardo", "23", "México");

//Ahora veremos continuación antes de ES6:
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Ahora con los templates se hace más fácil concatenar.
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Cmmodi. Ipsum vel duis yet minima \n"// con el \ invertido era separar las líneas y despues se concatenaba con el signo del + y se colocaba otra frase epicarda.
+ "Otra frase epica que nesesitamos."// No es la mejor forma.

//Pero con ES6 si es la mejor forma de salto de línea.
let lorem2 = `Otra frase epica que nesesitamos
ahora esta frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'namee': 'Sneyder',
    'age': 17,
    'country': 'CO',
}

// Acceder a los elementos
console.log(person.namee, person.age);

//Estructurar elementos ES6
let { namee } = person;
console.log(namee);

//Operador de propagación ES6 lo mejor para lo mejor
let team1 = ['Sneyder', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Sneyder', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);


// Un atributo para quitar los duplicados de nombres es SET.
let team1 = ['oscar', 'andres', 'ricardo'];
let team2 = ['andres', 'yesica', 'camila'];

let education = ['Carolina', ...team1, ...team2];
let education2 = new.Set(['Carolina', ...team1, ...team2]);
console.log(education);
console.log(education2);

// Arrow functions, Promesas Y parámetros en objetos.

let Name = 'Sneyder';
let age = 17;

// anteriormente para crear objetos era asi ES5.
obj = { Name: Name, age: age };
// Ahora con ES6
obj2 = { Name, age };
console.log(obj2);

// Vamos a las Arrow Functions.
const names = [
    {name: 'Sneyder', age: 17},
    {name: 'Jaime', age: 19}
]
// para iterar cada uno de los elementos y mostralos en la consola se utiliza el emtodo map.
let listOfNames = names.map(function(item){
    console.log(item.name);
}) 
// ejemplos de un codigo mas pro.
// let listOfNames2 = names.map(item => console.log(item.name));

// const listOfNames3 = (Name, age, country) => {
//     ...
// }

// const listOfNames4 = name => {
//     ...
// }

// const square = num => num * num;
// JS no es un leguaje sincronico no se van a ejecutar los codigos al mismo tiempo si no uno por uno.

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
           reject('Ups!!');      
        }
    });     
}  
 
 helloPromise()
 .then(Response => console.log(Response))
 .then(() => console.log('hola'))
 .catch(error => console.log(error));

// Clases, Módulos y Generadores
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,3)); // 5

consthello = require('./module')
console.log(hello());
// Import lo que hace es recibir el mensaje escrito en en module.js y from './ nombredelarchivo'


function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

