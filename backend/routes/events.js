const router=require('express').Router();
const { events } = require('../models/event.model');
let Event=require('../models/event.model');

router.route('/').get((req,res)=>{
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>
{
    const username=req.body.username;
    const title=req.body.title;
    const description=req.body.description;
    const address=req.body.address;
    const locationUpload=req.body.locationUpload;
    const peopleNeeded=req.body.peopleNeeded;

    const newEvent=new Event({username,title,description,address,locationUpload
        ,peopleNeeded});

    newEvent.save()
        .then(()=>res.json('Event added'))
        .catch(err=>res.status(400).json('Error: ' + err));
});

router.route("/:id").get((req,res)=>
{
    Event.findById(req.params.id)
        .then(events => res.json(events))
        .catch(err=>res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req,res)=>
{
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json("Event Deleted"))
        .catch(err=>res.status(400).json('Error: ' + err));
});

router.route("/update/:id").post((req,res)=>
{
    Event.findById(req.params.id)
        .then(users => 
            {
                events.username=req.params.username;
                events.title=req.params.title;
                events.description=req.params.description;
                events.address=req.params.address;
                events.locationUpload=req.params.locationUpload;
                events.peopleNeeded=req.params.peopleNeeded;

                events.save()
                .then(() => res.json("Event has been updated"))
                .catch(err=>res.status(400).json("Error" + err));
            })
        .catch(err=>res.status(400).json('Error: ' + err));
});

module.exports=router;