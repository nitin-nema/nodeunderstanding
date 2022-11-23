const http = require("http");

var fs = require("fs");

const port = 8000;
// let readStream = fs.createReadStream;



//with readFile
// read file  -- aysnc -- non-blocking
// http.createServer(function (req, res) {
   
//     fs.readFile('lastestfile.txt', function (err,data) {
//         res.end(data);
//     })
// }).listen(port, () => {
    
//     console.log("Server is running ......")
// });



// create stream
//backpressure

http.createServer(function (req, res) {
   
    fs.createReadStream('lastestfile.txt', pipe(res));

}).listen(port, () => {
    
    console.log("Server is running ......")
});

  
// readStream.on('open', function(){​​
// readStream.pipe(res) 
// }​​)

//comporession
http.createServer(function (req, res) {
   
    fs.createReadStream('lastestfile.txt', pipe(res));

}).listen(port, () => {
    
    console.log("Server is running ......")
});