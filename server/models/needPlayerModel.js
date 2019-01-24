const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    category: String,
    title: String,
    date: Date, 
    region: String,
    address: String,
    amPm: String,
    hour: Number,
    minute: Number,
    players: Number,
    joinedPlayers: Number,
    duration: Number, 
    cost: Number,
    mobile: Number,
    email: String,
    description: String,
    registeredDate: Date,
    modifiedDate: Date,
    userId: String
});

module.exports = mongoose.model("eventItems", Schema);