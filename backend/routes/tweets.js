const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');
const User = require('../models/user');

router.get('/', function (req, res) {
    Tweet
        .find({})
        .populate('creator')
        .then(tweets => res.status(200).json(tweets))
        .catch(err => res.status(503).json(err));
});

router.post('/', function(req,res){
    let data = req.body;
    data.creator = req.user._id;
    let newTweet = new Tweet(data);

    newTweet
        .save()
        .then(result => {
          res.status(201).json(result);
        })
        .catch(err => res.status(503).json(err))
});

router.put('/:id', function(req, res){

    let id = req.params.id;
    let data = req.body;

    // TODO verificar que es el dueño.

    Tweet
        .findOne({ _id: id})
        .then(function (tweet) {
            tweet.message  = data.message;
            return tweet.save()
        })
        .then( result => {
            res.status(200).json(result)
        })
        .catch( err => res.status(503).json(err));

});

router.delete('/:id', function(req, res){
    let id = req.params.id;

    // TODO verificar que es el dueño.

    Tweet
        .findOne({ _id : id})
        .then(function (tweet) {
            return tweet.remove()
        })
        .then(function(resutl){
            res.status(200).json( { message: 'Se elimino el tweet id: ' + id})
        })
        .catch( err => res.status(503).json(err));

});

module.exports = router;
