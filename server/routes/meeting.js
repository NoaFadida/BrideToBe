const router = require("express").Router();
const Meeting = require("../models/Meeting");

router.get("/meeting", async(req, res) => {

    const meeting =  await Meeting.findOne({time: req.body.time});
    // learn about pipe - from ref to object
    return res.send(meeting)
});

router.post("/save", async (req, res) => {
    // create a meeting, need to  send required date from client
    const Meeting = new Meeting({
        MeetingType:req.body.MeetingType,
        user:req.body.user,
        serviceProvider: req.body.serviceProvider
    })

    // save and send to client

})

module.exports = router;