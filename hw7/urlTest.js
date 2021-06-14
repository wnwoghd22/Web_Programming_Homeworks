var url = require('url');
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    //res.write(req.url);
    res.end(txt);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');