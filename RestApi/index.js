const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json())
app.use('/api',routes)

mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;

app.listen(process.env.port || 4000,function(){
console.log("4000")
})