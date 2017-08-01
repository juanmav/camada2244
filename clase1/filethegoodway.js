const fs = require('fs');

let cb = function(err, data){
    console.log(data);
    console.log('ya mostre el archivo');
};

console.log('Antes de leer el archivo');
fs.readFile('archivo.txt','utf8', cb);
console.log('despues de leer el archivo');
