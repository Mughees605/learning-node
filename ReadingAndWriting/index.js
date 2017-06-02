var fs = require('fs');

var read = fs.readFileSync('file.txt','utf8')
var write = fs.writeFileSync('writeMe.txt',read)
console.log(read);