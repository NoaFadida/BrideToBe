const router = require("express").Router();
const User = require("../models/User");

//Get Admins
router.get("/admins", async(req, res) => {
    const users = await User.find({ isAdmin: true });
    res.send(users);
});

//Get User
router.get("/", async(req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId ?
            await User.findById(userId) :
            await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;