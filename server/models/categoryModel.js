const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    category: String
});

module.exports = mongoose.model("categories", Schema);