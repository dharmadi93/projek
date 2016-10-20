var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.User
var Vehicles = models.Vehicle

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

// USER
router.get('/users', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    console.log(user.first_name);
    res.render('users', {title: "Users", data: data, user: user})
  }).catch(function (err) {
    res.send(err.message)
  })
})

router.get('/edit_user/:id', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.render('edit_user', {title: "Edit User", data: data, user: user})
  }).catch(function (err) {
    res.send(err)
  })
})

router.post('/edit_user', function (req, res, next) {
  Users.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    address: req.body.address,
    phone: req.body.phone
  }, {
    where: {
      id: req.body.user_id
    }
  }).catch(function (err) {
    res.send(err.message)
  }).then(function () {
    res.redirect('/dashboard/users')
  })
})

router.get('/delete_user/:id', function (req, res, next) {
  Users.destroy({
    where: {
      id: req.params.id
    }
  }).catch(function (err) {
    res.send(err.message)
  }).then(function () {
    res.redirect('/dashboard/users')
  })
})

router.get('/vehicle', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Vehicles.findAll().then(function (vehicle) {
    res.render('vehicle', {title: "Vehicle", data: data, vehicle: vehicle})
  }).catch(function (err) {
    res.send(err.message)
  })

  // Vehicles.find().then((vehicle)=> {
  //   vehicle.getUser().then((user) => {
  //     // console.log(student.username);
  //     // console.log(vehicle.dataValues);
  //     res.render('vehicle', {title: "Vehicle", data: data, user: user.username, vehicle: vehicle})
  //   })
  // })

  // Vehicles.findAll().then(function (vehicle) {
  //   for (var i = 0; i < vehicle.length; i++) {
  //     Users.findAll({
  //       where: {
  //         id: vehicle[i].UserId
  //       }
  //     }).then(function (user) {
  //       // console.log(user[0].username);
  //       res.render('vehicle', {title: "Vehicle", data: data, user: user[0], vehicle: vehicle})
  //     })
  //   }
  // })

  // Vehicles.findAll({
  //   include: {
  //     model: Users
  //   }
  // }).then(function (vehicle) {
  //   // console.log(vehicle[0]);
  //   for (var i = 0; i < vehicle.length; i++) {
  //     vehicle[i].getUser().then(function (user){
  //       console.log(user.first_name);
  //       res.render('vehicle', {title: "Vehicle", data: data, user: user.first_name, vehicle: vehicle})
  //     })
  //   }
  // }).catch(function (err) {
  //   res.send(err.message)
  // })
})

router.get('/add_vehicle', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Users.findAll().then(function (user) {
    res.render('add_vehicle', {title: "Add Vehicle", data: data, user: user})
  })
})

router.post('/add_vehicle', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Vehicles.create({
    type: req.body.type,
    number_plate: req.body.number_plate,
    stnk: req.body.stnk,
    UserId: req.body.owner
  }).catch(function (err) {
    res.send(err.message)
  }).then(function () {
    res.redirect('/dashboard/vehicle')
  })
})

router.get('/edit_vehicle/:id', function (req, res, next) {
  var data = {
    user_id: req.session.user_id,
    user_name: req.session.username,
    role: req.session.role
  }

  Vehicles.findOne({
    where: {
      id: req.params.id
    }
  }).catch(function (err) {
    res.send(err.message)
  }).then(function (vehicle) {
    res.render('edit_vehicle', {title: "Edit Vehicle", data: data, vehicle: vehicle})
  })
})

router.post('/edit_vehicle', function (req, res, next) {
  Vehicles.update({
    type: req.body.type,
    number_plate: req.body.number_plate,
    stnk: req.body.stnk
  }, {
    where: {
      id: req.body.vehicle_id
    }
  }).catch(function (err) {
    res.send(err.message)
  }).then(function (vehicle) {
    res.redirect('/dashboard/vehicle')
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
