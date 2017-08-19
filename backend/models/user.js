const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    mail: String
});

userSchema.methods.getFullName = function () {
    return this.name + ' ' + this.lastname;
};

User = mongoose.model('User', userSchema);

module.exports = User;