var fs = require('fs');

fs.writeFile('input.txt', 'Simple and easy learning', function(err) {
    if(err) { return console.error(err); }
    console.log("Data written successfully!");

    fs.readFile('input.txt', function(err, data){
        if(err) { return console.error(err); }

        console.log(data.toString());
        console.log(data);
    })
})