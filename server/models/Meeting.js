const mongoose = require("mongoose");

const Meeting = new mongoose.Schema({
    Members: {
        type: Array,
        require: true,
    },
    Time: {
        type: String,
        require: true,
    },
    Type: {
        type: String,
        require: true,
    },
    Date: {
        type: String,
        require: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Meeting", Meeting);