const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
 
module.exports = mongoose.model('Client', clientSchema);
