var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    console.log('logged');
    next();
}

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000);