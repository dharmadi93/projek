var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.User

/* GET home page. */
router.get('/', function(req, res, next) {

  if(typeof req.session.user_id != "undefined") {
    res.redirect('/dashboard')
  }
  else {
    res.render('index', {title: 'Login'})
  }

});

router.post('/login', function (req, res, next) {
  // res.send(req.body.username)
  Users.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).catch(function (err) {
    console.log(err.message)
  }).then(function (user) {
    try {
      if(user.username) {
        console.log(req.session);
        req.session.user_id = user.id
        req.session.username = user.username
        req.session.role = user.role
        res.redirect('/dashboard')
      }
    }catch (err) {
      res.redirect('/')
    }
  })


})

router.post('/register', function (req, res, next) {
  Users.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    address: req.body.address,
    phone: req.body.phone
  }).catch(function (err) {
    console.log(err.message)
  }).then(res.redirect('/'))
})

module.exports = router;
