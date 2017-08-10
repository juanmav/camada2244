let http = require('http');

options = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/users/1'
};

http.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        // data es texto plano.
        console.log(data);
        console.log(data.id);
        let user = JSON.parse(data);
        console.log(user.id);
        console.log(user.name);
    });

});


