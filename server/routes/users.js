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

//UPDATE
router.put("/admin/:adminId", async (req, res) => {
    try {
        let updateUser = await User.findByIdAndUpdate({ _id: req.params.adminId }, { $set: req.body });
        updateUser.save();
        updateUser = await User.findOne({ _id: req.params.adminId });
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/all-users", async(req, res) => {
    const allUsers = await User.find();
    return res.send(allUsers);
});
module.exports = router;