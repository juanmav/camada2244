let myfile = './data.csv';
const csv=require('csvtojson');


let sum = 0;
let cantidaUsuarios = 0;

let cantidadDescartados = 0;

csv()
    .fromFile(myfile)
    .on('json',(user)=>{
        if (parseInt(user.edad)){
            sum = sum + parseInt(user.edad);
            cantidaUsuarios++;
        } else {
            cantidadDescartados++;
        }
    })
    .on('done',(error)=>{
        /*let sum = usuarios.reduce(function (sum, u) {
            return sum + parseInt(u.edad);
        }, 0);*/

        let promedio = sum / cantidaUsuarios;

        console.log('Promedio de edad: ' + promedio);
        console.log('Procesados:' + cantidaUsuarios);
        console.log('Descartados: ' + cantidadDescartados);
        console.log('Termino la lectura de mi archivo CSV')
    });