var http = require("http");

const port = 7070;

const server = http.createServer((req, res) => {
    res.write("--NNNNN");
    console.log(req.headers);
    res.end();
})

server.listen(port, () => {
    console.log("server is running .....");


    var options = {
        port: 7070,
        host: '127.0.0.7'
    };

    var request = http.request(options);

    request.setHeader('Cookie', ['type= xyz', "language =javascript"]);
    request.end();
    
})
