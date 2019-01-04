const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    eventId: String,
    userId: String,
    comment: String
});

module.exports = mongoose.model("joinEvent", Schema);