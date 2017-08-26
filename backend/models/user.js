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

userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    delete obj.username;
    return obj
};

User = mongoose.model('User', userSchema);

module.exports = User;