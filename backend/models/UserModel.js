const {model} = require('mongoose');

const {userSchema} = require("../schemas/userSchema")

const UserModel = model('User', userSchema);

module.exports = {UserModel};