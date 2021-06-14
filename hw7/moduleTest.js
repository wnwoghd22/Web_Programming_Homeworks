var http = require("http");
var dt = require("./date");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("date: " + dt.getDate() + "\n");

    response.end('Hello world\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');