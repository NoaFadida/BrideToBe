const mongoose = require("mongoose");

const Unavailble = new mongoose.Schema({
    Id: {
        type: String,
        require: true,
    },
    StartingTime: {
        type: String,
        require: true,
    },
    EndingTime: {
        type: String,
        require: true,
    },
    Date: {
        type: String,
        require: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Unavailble", Unavailble);