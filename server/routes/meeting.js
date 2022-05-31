const router = require("express").Router();
const Meeting = require("../models/Meeting");
const Unavailble = require("../models/Unavailble");

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

router.delete("/:meetingId", async(req, res) => {
    try {
        const meeting = await Meeting.findOneAndRemove({ _id: req.params.meetingId });
        res.send(meeting)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/add-unavailble", async (req, res) => {
    const addUnavailbleDates = new Unavailble({
        Id: req.body.id,
        StartingTime: req.body.startingTime,
        EndingTime: req.body.endingTime,
        Date: req.body.date,
    });
    const savedUnavailble = await addUnavailbleDates.save();
    res.status(200).json(savedUnavailble);
});

router.get("/unavailble/:adminId", async(req, res) => {
    const daysOff = await Unavailble.find({ Id: req.params.adminId });
    return res.send(daysOff);
});

module.exports = router;