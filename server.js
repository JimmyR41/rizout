//dependancies
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

//set use views ejs or whatevs


//static files

//set routes
app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/pages/index.html');
});

app.get('/about', function(req,res){
  res.json({message:'Hello from about'});
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/views/pages/contact.html');
});

app.post('/contact', function(req,res){
  console.log(req.body);
  res.send("<h1>Hello, " + req.body.name + " Welcome to the club!</h1>")
});




//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
