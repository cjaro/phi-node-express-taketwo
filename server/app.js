console.log('starting up the server');

var express = require('express');
var app = express();


//this will run when we make a request
app.use(express.static('server/public')); //is this request for a static file, like script.js, index.html, styles.css, etc

app.listen(5000);
