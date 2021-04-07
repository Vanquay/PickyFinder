const router=require('express').Router();
let Event=require('../models/event.model');

router.route('/').get((req,res)=>{
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>
{
    const title=req.body.title;
    const description=req.body.title;
    const address=req.body.address;
    const locationUpload=req.body.locationUpload;
    const peopleNeeded=req.body.peopleNeeded;

    const newEvent=new Event({title,description,address,locationUpload
        ,peopleNeeded});

    newEvent.save()
        .then(()=>res.json('Event added'))
        .catch(err=>res.status(400).json('Error: ' + err));
});

module.exports=router;