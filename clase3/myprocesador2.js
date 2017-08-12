const csv=require('csvtojson');

let usuarios = [];


function procesar(nameFile){
    return new Promise(function(resolve, reject){
        csv()
            .fromFile(nameFile)
            .on('json',(user)=>{
                usuarios.push(user);
            })
            .on('done',(error)=>{
                let sum = usuarios.reduce(function (sum, u) {
                    return sum + parseInt(u.edad);
                }, 0);

                let promedio = sum / usuarios.length;
                resolve(promedio);
            });
    });
}

module.exports = procesar;