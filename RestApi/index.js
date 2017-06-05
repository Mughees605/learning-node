const express = require('express');
const router = require('./routes/api')

const app = express();

app.get('/api',function(req,res){
    res.send({name:"mughees"})
})

app.listen(process.env.port || 4000,function(){
console.log("4000")
})