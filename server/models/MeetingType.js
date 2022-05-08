const mongoose = require("mongoose");

const MeetingTypes = new mongoose.Schema({

    TypeOfMeeting: {
        
        type: Object,
        enum: [{ "initial consulting": 60 },
            {"fitting": 40},
            {"pick up dress": 30 }],
        require: true
    },
}, { timestamps: true });

module.exports = mongoose.model("MeetingTypes", MeetingTypes);