const express = require('express');
const router = express.Router({ mergeParams: true });
const Comment = require('../models/comment');

// /tweet/:tweetId/comments/ GET Listado
// /tweet/:tweetId/comments/ POST creo un tweet.

router.get('/', function(req, res){
    Comment
        .find({
            tweet: req.params.tweetId
        })
        .populate('creator')
        .then(comments => res.status(200).json(comments))
        .catch(err => res.status(503).json(err))
});

router.post('/', function(req, res){
    let data = req.body;
    data.creator = req.user._id;
    data.tweet = req.params.tweetId;

    let newComment = new Comment(data);

    newComment
        .save()
        .then( result => res.status(201).json(result))
        .catch(err => res.status(503).json(err))
});


module.exports = router;