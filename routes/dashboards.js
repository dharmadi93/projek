var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.User

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }
  // console.log(data);



  if(typeof req.session.user_id == "undefined") {
    res.redirect('/')
  }
  else {
    res.render('dashboard', {title: 'Dashboard', data: data})
  }
});

router.get('/users', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('users', {title: "Users", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/add_user', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('add_user', {title: "Add User", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/vehicle', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('vehicle', {title: "Vehicle", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/add_vehicle', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('add_vehicle', {title: "Add Vehicle", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/vehicle_report', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('vehicle_report', {title: "Add Vehicle", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/profit_report', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('profit_report', {title: "Add Vehicle", data: data})
  }).catch(function (err) {
    res.send(err.message)
  })
})

module.exports = router;
