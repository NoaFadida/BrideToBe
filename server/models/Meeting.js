
const mongoose = require("mongoose");

const Meeting = new mongoose.Schema({
    MeetingType: {
        type: 'ObjectId', ref: 'MeetingTypes',
        required: true,
    },
    user: {
          type: 'ObjectId', ref: 'User'
    },

    serviceProvider: {
        type: 'ObjectId', ref: 'User'
  },

  time: {
      type: Date,
      required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Meeting", Meeting);