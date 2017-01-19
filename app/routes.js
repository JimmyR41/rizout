//requirements
var express = require('express');
var path = require('path');

//create and export server obj
var router = express.Router();
module.exports = router;

//Route protoypes
router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/contact', contactPage);
router.post('/contact', contactPost);
router.get('/@:username', homeParams);
/*show 404*/
router.use(show404);

//route functions
function homePage(req,res){
  res.render('pages/index');
};

function aboutPage(req,res){
  res.render('pages/about');
};

function contactPage(req,res){
  res.render('pages/contact');
};

function contactPost(req,res){
  console.log(req.body);
  res.send("<h1>Hello, " + req.body.name + "Welcome to the club!</h1>")
};

function homeParams(req,res){
  res.send('Welcome ' + req.params.username);
};

function show404(req,res,next){
  res.status(404);
  res.render('pages/404');
};
