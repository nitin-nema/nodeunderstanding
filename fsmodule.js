const fs = require('fs');

//syncronous work

fs.writeFileSync('createNewFile.txt','added the content or line1')

//check multiple sentecne
fs.writeFileSync('createNewFile.txt', 'added the content or line1', 'added the content or line2')

//added --do not override
fs.appendFileSync('createNewFile.txt', 'added the content or line1', 'added the content or line2')

//read the file
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);   //buffer data type

org_data = buf_data.toString();
console.log(org_data);


//rename file
fs.renameSync("dile1", "file2");

// append the file / edit the file
fs.unlinkSync('file1.txt');



