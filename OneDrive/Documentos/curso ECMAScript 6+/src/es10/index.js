let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//otro valor
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//
let hello = '      hello world';

console.log(hello);
console.log(hello.trimStart());

//
let hello = 'hello world       ';
console.log(hello);
console.log(hello.trimEnd());

//
let entries = [["name", "Sneyder"], ["age", 17]];

console.log(Object.fromEntries(entries));

//
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);