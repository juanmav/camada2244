const procesar = require('./myprocesador2');

let pro1 = procesar('./data.csv').then(function (promedio1) {
    console.log('Promedio de edad: ' + promedio1);
    console.log('Termino la lectura de mi archivo CSV');
    return promedio1;
});

let pro2 = procesar('./data2.csv').then(function (promedio2) {
    console.log('Promedio de edad: ' + promedio2);
    console.log('Termino la lectura de mi archivo CSV');
    return promedio2;
});

Promise.all([pro1, pro2]).then(function ([promedio1, promedio2]) {
    console.log(promedio1);
    console.log(promedio2);

    console.log( (promedio1 + promedio2) /2);
});