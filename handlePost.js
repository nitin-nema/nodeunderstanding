// const { request, response } = require('express');
const http = require('http');

const server = http.createServer(function (req, res) {
    
    if (request.method == 'POST') {
        console.log("Psot methoid been called");
        var body = ''
        request.on('data', function (data) {
            body += data;
            console.log("partial body data", body);
        })

        request.on('end', function () {
            console.log('body', body)
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('api is successfully posted');
        })
    }
    else {
        console.log("GET situation");
        var htmlForm = `
         <html>
        <body>
        <form method = "post" action ="http://localhost:8000">
        Name : <input name="name" type="text" />
        <input type="submit" value="submit"/>
        </form>
        </body>
        </html>
        `
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(htmlForm);
    }

    const port = 8000;
    const host = "127.0.0.7";
    server.listen(port, host)
    console.log(`server is runinng gggg... ${host}:${port}`)
})


   