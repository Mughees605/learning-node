const express = require('express');

const app = express();

app.get('/',function(req,res){
    console.log('GET request')
})

app.listen(process.env.port || 4000,function(){
console.log("4000")
})