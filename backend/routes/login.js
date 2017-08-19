const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res) {

    let data = req.body;

    User.findOne({
        username: data.username
    })
        .then(function (user){
            if (user && user.password == data.password){
                let json = user.toJSON();
                delete json.password;
                let token = jwt.sign(json, 'mysecretolargo');
                res.status(200).json({token});
            } else {
                res.status(403).json({ message: 'Credenciales no validas'})
            }
        })
        .catch(err => res.status(503).json(err))

});

module.exports = router;