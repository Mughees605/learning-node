const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json())
app.use('/api',routes)

mongoose.connect('mongodb://mughees605:mughees1996@ds151289.mlab.com:51289/hello-world')
// mongoose.Promise = global.Promise;

app.listen(process.env.port || 4000,function(){
console.log("4000")
})