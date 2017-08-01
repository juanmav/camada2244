const fs = require('fs');


console.log('Antes de abrir el archivo');
const file = fs.readFileSync('archivo.txt');
console.log('Despues de Abrir el archivo');

console.log(file.toString());

console.log('ya mostre el archivo');