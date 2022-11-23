const path = require('path');

const a = path.basename('C:\Users\ASUS\Documents\nodeUnderstanding');

const b = path.dirname('C:\Users\ASUS\Documents\nodeUnderstanding\firstFile.js');

const c = path.extname('C:\Users\ASUS\Documents\nodeUnderstanding\package.json');

console.log(`you are using extension..extension name ${c}`);