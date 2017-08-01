const datos = require('./userdata.js');

/**
 * map, filter, reduce, sort
 * */

let listadoNombres = datos.map(function(usuario){
    return usuario.name;
});


let filtrados = datos.filter(function(usuario){
    return usuario.id > 8;
});

let ordenados = datos.sort(function (usuario1, usuario2) {
    return usuario1.id - usuario2.id; // -1, 0, 1
});

/*ordenados.forEach(function (usuario) {
 console.log(usuario.id);
 });*/

let sum = datos.reduce(function (acc, usuario) {
    return acc + usuario.id;
},0);

//console.log(sum / datos.length);

//let average = sum / datos.length;


let promedioActualizadoDeEdad =
    datos
        .map(function(usuario){
            return usuario.id + 1;
        })
        .reduce(function (acc, edad) {
            return acc + edad;
        },0) / datos.length;

console.log(promedioActualizadoDeEdad);//*/

let edadesActuales = datos.map(function(usuario){
    return usuario.id + 1;
});

console.log(edadesActuales);

let suma = edadesActuales.reduce(function (acc, edad) {
    return acc + edad;
},0);

console.log(suma);

let promedio = suma / datos.length;

console.log(promedio);