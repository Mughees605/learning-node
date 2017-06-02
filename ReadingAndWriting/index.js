var fs = require('fs');

var read = fs.readFile('file.txt','utf8',function(err,data){
  fs.writeFile('writeMe.txt',data)
})