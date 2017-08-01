// https://nodejs.org/api/events.html
const EventEmitter = require('events');

class MyEmmiter extends EventEmitter{};

let e = new MyEmmiter();

e.on('verde', function () {

    console.log('el semaforo esta en verde');
});

e.on('rojo', function () {
    console.log('el semaforo esta en rojo')
});


// Esto esta en otra parte de la APP.
e.emit('verde');

setTimeout(function(){
    e.emit('rojo');
}, 2000);