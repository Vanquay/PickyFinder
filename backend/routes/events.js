const router=require('express').Router();
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

module.exports=router;