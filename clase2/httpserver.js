let http = require('http');


let server = http.createServer(function (request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("The Begin of programing....\n");
    response.end("Hello World\n");

});

console.log('Levante en el puerto 8000');

server.listen(8000);