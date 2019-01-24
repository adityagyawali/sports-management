const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model("user", Schema);