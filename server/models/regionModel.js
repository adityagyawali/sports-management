const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    region: String
});

module.exports = mongoose.model("regions", Schema);