//dependancies
var express = require('express');
var expressLayout = require('express-ejs-layouts');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;


//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

//set use views ejs or whatevs
app.set('view engine', 'ejs');
app.use(expressLayout);
//set routes
var router = require('./app/routes');
app.use('/', router);


//static files

//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
