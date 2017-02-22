console.log('starting up the server');

var express = require('express');
var app = express();

var fishiesList =[
  {name: 'walleye'},
  {name: 'pike'},
  {name: 'muskie'},
  {name: 'trout'},
  {name: 'salmon'},
  {name: 'bass'},
  {name: 'sturgeon'},
  {name: 'perch'},
  {name: 'halibut'},
  {name: 'shiner'},
  {name: 'darter'},
  {name: 'carp'},
  {name: 'minnow'},
  {name: 'whitefish'},
  {name: 'bullhead'},
];

//this will run when we make a request
app.use(express.static('server/public')); //is this request for a static file, like script.js, index.html, styles.css, etc

app.get('/fish', function(req, res){
  console.log(req);
  res.send(fishiesList); //always send a response
});

//handle request for the first fish
app.get('/fish/first', function(req, res){
  console.log(req);
  res.send(fishiesList[0]);
});

// handle the request for the last fish

app.get('/fish/last', function(req, res){
  console.log(req);
  res.send(fishiesList[fishiesList.length-1]);
});

//handle request for the name of the last fish

app.get('/fish/first/name', function(req, res){
  console.log(req);
  res.send(fishiesList[0].name);
});

app.get('/fish/last/name', function(req, res){
  console.log(req);
  res.send(fishiesList[fishiesList.length-1].name);
});


app.listen(5000);

//console.log on server (app.js) shows up in terminal
//console.log on client (client.js) will show up in browser's console
