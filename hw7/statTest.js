var fs = require('fs');

console.log('get file info');

fs.stat('input.txt', function(err, stats) {
    if(err) { return console.log(err); }

    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})