var fs = require("fs");

var buffer_content = fs.readFileSync("lastestfile.txt");

var content =  buffer_content.toString()
console.log(buffer_content);

fs.module_name('filename', function (err) {
    if (err) throw err;
    console.log("Message")
})

