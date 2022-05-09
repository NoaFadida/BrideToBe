const router = require("express").Router();
const Meeting = require("../models/Meeting");

router.get("/:userId", async(req, res) => {
    try {
        const meetings = await Meeting.find({
            Members: { $in: [req.params.userId] },
        });
        res.status(200).json(meetings);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DONT FINISHED YET
router.get("/:userId/meetingId", async(req, res) => {
    const meeting = await Meeting.findOne({ time: req.body.time });
    // learn about pipe - from ref to object
    return res.send(meeting);
});

router.post("/create", async(req, res) => {
    // create a meeting, need to  send required date from client
    const newMeeting = new Meeting({
        Members: req.body.Members,
        Type: req.body.Type,
        Time: req.body.Time,
        Date: req.body.Date,
    });
    // save and send to client
    const savedMeeting = await newMeeting.save();
    res.status(200).json(savedMeeting);
});

module.exports = router;