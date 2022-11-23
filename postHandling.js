var express = require('express');

var app = express();

var bodyParser = require('body-parser');
const { response } = require('express');

var urlencodedParser = bodyParser.urlencoded({extends:false});


app.get('/index.html',function(req,res){
    res.sendFile(__dirname + "/" + "index.html" );
})

app.post('/post', urlencodedParser, function(req, res){
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
    var port = server.address().port
    console.log("server is listenninggg",port)
})