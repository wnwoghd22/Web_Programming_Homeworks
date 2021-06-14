var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/about', function (req, res) {
    res.json({
        name : 'greg'
    });
});

app.listen(3000, function() {
    console.log("App listening on port 3000...");
});