let usuarios = require('./userdata');


// Ejercio 2
//  Basado en el listado de usuarios generar un 
// nuevo listado donde el usuario solo tengo el 
// nombre y la edad (sin el resto de los datos)

let nuevaLista = usuarios.map(function (usuario) {

    return usuario.name + " " + usuario.age;
});

console.log(nuevaLista);

let nuevaLista2 = usuarios.map(function (usuario) {

    return {
        name: usuario.name,
        age: usuario.age
    }
});//*/

console.log(nuevaLista2);