const mongoose = require("mongoose");

const MeetingTypes = new mongoose.Schema({
    serviceProviderId: {
        type: String,
        required: true,
    },
    TypeOfMeeting: {
        type: String,
        require: true
    },
}, { timestamps: true });

module.exports = mongoose.model("MeetingTypes", MeetingTypes);