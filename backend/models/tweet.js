const mongoose = require('mongoose');

let tweetSchema = mongoose.Schema({
    message: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;