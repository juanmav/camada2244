const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/camada2244');

let PersonSchema = mongoose.Schema({
    name: String,
    dni: Number,
    lastname: String,
    nationality: String
});

let Person = mongoose.model('Person', PersonSchema);

/*let persona = new Person({
    name: 'Juan',
    dni: 100,
    lastname: 'Perez',
    nationality: 'Argentina'
});

console.log(persona);

persona.save();*/

/*let persona1 = new Person({
 name: 'Roberto',
 dni: 101,
 lastname: 'Rojas',
 nationality: 'Argentina'
 });

 console.log(persona1);

 persona1.save();*/

/*Person.find()
    .then( people => {
    console.log(people);
});*/

Person.findById('598f5596dd15745ca8a509cf')
    .then(person => console.log(person));