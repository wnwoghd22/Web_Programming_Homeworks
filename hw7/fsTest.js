var fs = require('fs');
var http = require("http");

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');