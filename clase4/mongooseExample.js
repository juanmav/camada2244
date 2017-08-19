let mongoose = require('mongoose');

// Inicializo la coneccion a la DB
mongoose.connect('mongodb://localhost:27017/camada2244');

let personSchema = mongoose.Schema ({
    name: String,
    lastname: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story'}]
});

let storySchema = mongoose.Schema({
    title: String,
    body: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Person'}
});

let Person = mongoose.model('Person', personSchema);
let Story = mongoose.model('Story', storySchema);

//let pedro = new Person({ name: 'Pepito', lastname: 'Rojas', age: 10});

/*pedro.save(function(err){
    if(err){
        throw 'Paso algo inesperado';
    } else {

        let storyPedro = new Story({
            title: 'La historia sin fin',
            body: 'Si tenia final esta historia',
            creator: pedro._id
        });

        storyPedro.save(function (err) {
            pedro.stories.push(storyPedro._id);
            pedro.save();
        });
    }

});*/

/*Story
    .find()
    .populate('creator')
    .then(stories => {

        console.log(stories);

        stories.forEach( s => {
          console.log('Titulo: ' + s.title);
            console.log('Autor: ' + s.creator.lastname);
        })
    });*/

Person.
    findOne({
        name: 'Pepito'
    })
    .then(pepito => {
       console.log(pepito);

        let story = new Story({
            title: 'Un nueva Historia de Pepito',
            body: 'Si tenia final esta historia',
            creator: pepito._id
        })
            .save( err => {
                pepito.stories.push(story._id);
            })
    });

Person
    .findOne({
        name: 'Pepito'
    })
    .populate('stories')
    .then(pepito => {

        console.log('Para el autor: ' + pepito.lastname + ' tiene los siguientes titulos:');
        pepito.stories.forEach( story => console.log(story.title));

    });
