const express = require('express');

let app = express();

app.get(`/products`,function(req,res){
    console.log("get is working");
    res.send('Hello Products listing ');
})


const server  = app.listen(8081,function(){
   
    var port = server.address().port;

    console.log("example app listing", port);
})