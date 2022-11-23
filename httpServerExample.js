// const bodyParser = require("body-parser");
var http = require("http");
var port = 7000;
//simple example 
// http.createServer(function (req, res) {
//     res.write("I am not --- listeninng out");
//     res.end();  //end of response
// }).listen(8080);


// writing with writehead for header
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/js',
        "Connection": "keep-alive",
        "Content-length": "body.length"

    });
    res.write("Data been sent out with these attribute---NNNNN");
    res.end();  //end of response
});

server.listen(port, () => {
    
    console.log(`server is running on ${port}`)
})



// write with setHeader


