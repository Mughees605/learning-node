const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const app = express();

app.use('/api',routes)

app.listen(process.env.port || 4000,function(){
console.log("4000")
})