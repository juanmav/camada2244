const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    message: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet'}
});

Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;