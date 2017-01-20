module.exports = function(req,res,next){
  console.log('middleware');
  //user check
  //grab user for db
  var username = 'Jim'; //User.findOne({ username: req.params.username });

  //was no user .404
  if(!username){
    res.status(404);
    return res.send('No user found');
  };
  //attaching info to request from db
  req.username = {
    username: 'Jim'
  };
  next();
};
