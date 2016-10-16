'use strict'

var models = require('../models')
var Users = models.User

class User {
    constructor (user) {
        this.username = user['username']
        this.password = user['password']
        this.first_name = user['first_name']
        this.last_name = user['last_name']
        this.email = user['email']
        this.role = user['role']
        this.address = user['address']
        this.phone = user['phone']
    }
}

var temp = new User({
    username: "dharmadi93",
    password: "tanamas",
    first_name: "dharmadi",
    last_name: "tanamas",
    email: "dharmadi93@gmail.com",
    role: "admministrator",
    address: "jalan sunter hijau 4",
    phone: "08999871008"
})

// console.log(temp.username)
Users.addUser(temp)