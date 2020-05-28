const bcrypt = require('bcryptjs');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

users.get('/new', (req, res) => {
    res.render('users/New')
});

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(req.body, (err, createdUser) => {
        console.log(createdUser)
        res.redirect('/recipes')
    });
});

module.exports = users;