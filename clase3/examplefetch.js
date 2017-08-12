const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users', {
    json: true
})
    .then(function (users) {
       users.forEach(u => console.log(u.email));
    });

rp('https://jsonplaceholder.typicode.com/users', {
    json: true,
    method: 'POST',
    body: {
        id: 1,
        username: 'pepito'
    }
}).then(function(response){
    console.log('usuario creado');
})