const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');

router.get('/', function (req, res) {
    Tweet
        .find({})
        .then(tweets => res.status(200).json(tweets))
        .catch(err => res.status(503).json(err));
});

router.post('/', function(req,res){

});

module.exports = router;
