
let numero;

/*setTimeout(function(){
    numero = 10;
}, 5000);*/


let fetch = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 1000);
});


fetch.then(function(data){
    numero = data;
});

console.log(numero);
