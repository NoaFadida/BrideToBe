const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    phone: {
        type: Number,
        required: true,
        length: 10,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    PickUpDress: {
         type: String,
         default: 60
     },
        Fitting: {
            type: String,
            default: 60
        },
        InitialMeeting: {
            type: String,
            default: 60
        }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);