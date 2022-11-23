const http = require('http');
const fs = require('fs')
const port = 8080;

const server = http.createServer((req,res,err)=>{
  
    // fs.readFile('file2.txt', function(err,data){
    //     res.end(data)
    // })

    fs.createReadStream('file2.txt').pipe(res);
    
})

server.listen(port,()=>{
    console.log(`Server has staterd at port ${port}`);
})