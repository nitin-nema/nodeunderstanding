const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));  

app.get("/",function(){
  res.send("Hello Page")
});

app.get("/about", function(req,res){
    res.send("about");
})

app.get("/calculator",function(req,res){
    res.sendFile(__dirname);
})

app.post("/calculator",function(req,res){
    res.send("posted");
    console.log(req.body);
    let n1= Number(req.body.v1);
    let n2 = Number(req.body.v2);
})

app.listen(3000,function(req,res){
    console.log("app is listening...");
});

app.get("/",()=>)