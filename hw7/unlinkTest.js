var fs = require('fs');

fs.unlink("testUnlink.txt", function(err) {
    if(err) throw err;
    console.log("File Deleted!");
})