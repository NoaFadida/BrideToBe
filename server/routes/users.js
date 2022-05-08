const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.get("/admins", async(req, res) => {
    const users = await User.find({ isAdmin: true });
    res.send(users);
});

module.exports = router;