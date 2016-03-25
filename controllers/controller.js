var User = require('../models/user.js');

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/public/views/index.html');
}

exports.getLogin = function(req, res, next) {
  console.log(req.user.username);
  console.log(req.user.id);

  User.findOne({
    username: req.user.username
  })
  .select('username')
  .exec()
  .then(function(user){
    res.json(user);
  });
}

exports.logout = function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}