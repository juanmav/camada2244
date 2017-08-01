/**
 * Listado de usuarios con edades.
 * Actualizar todas las edades a + 2 años,
 * tomar todas las edades mayor
 * a 35 años y calcular el promedio
 * */

let usuarios = require('./userdata');

let viejasEdades = usuarios.map(function (usuario) {
    return usuario.age;
});

console.log(viejasEdades);

let nuevasEdades = usuarios.map(function (usuario) {
    return usuario.age + 2;
});

console.log(nuevasEdades);

let mayoresA35 = nuevasEdades.filter(function (edad) {
    return edad > 35
});

console.log(mayoresA35);

let sum = mayoresA35.reduce(function (acc, edad) {
    return acc + edad;
}, 0);

let average = sum / mayoresA35.length;

console.log(average);