const obj = {
    name: "Sneyder",
    age: 17,
    country: "CO",
}
// all
let { name, ...all } = obj;
console.log(name, all);
// Ahora solo los elementos que queremos llamar
const obj = {
    name: "Sneyder",
    age: 17,
    country: "CO",
}
// all
let { country, ...all } = obj;// se quita country.
console.log(all);

// otro ejemplo XD
const obj = {
    name: "Sneyder",
    age: 17,
}
const obj1 = {
    ...obj,
    country: "Col",
}
console.log(obj1);

// otro 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};
helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('Finalizo'))

 //
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

function perimetro(lado) {
    return lado * 4
}
perimetro(5);

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(5);