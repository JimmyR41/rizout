module.exports = {
  homePage: homePage,
  aboutPage: aboutPage,
  contactPage: contactPage,
  contactPost: contactPost,
  homeParams: homeParams,
  show404: show404
};

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
