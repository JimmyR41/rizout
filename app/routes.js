//requirements
var express = require('express');
var path = require('path');

//create and export server obj
var router = express.Router();
module.exports = router;

//assign routes
router.get('/', function(req,res){
  res.render('pages/index');
});

router.get('/about', function(req,res){
  res.render('pages/about');
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});

router.post('/contact', function(req,res){
  console.log(req.body);
  res.send("<h1>Hello, " + req.body.name + " Welcome to the club!</h1>")
});

router.get('/@:username', function(req,res){
  res.send('Welcome ' + req.params.username);
});

router.use(function(req,res){
  res.render('/pages/404');
})
