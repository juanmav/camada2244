
let usuarios = require('./userdata');

let actualizado = usuarios.map(function (usuario) {
    let nuevo = Object.assign({}, usuario);
    nuevo.age = nuevo.age + 2;
    return nuevo;
});

console.log (usuarios[0]);
console.log(actualizado[0]);

