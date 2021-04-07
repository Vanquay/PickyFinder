const express=require ('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

var listener=app.listen(port,()=>{
    console.log('Server is running on port:' + listener.address().port);
});

//Connect to MongoDB database
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

//Use routes for mongoDb database
const eventsRouter=require('./routes/events');
const usersRouter=require('./routes/users');

app.use('/events',eventsRouter);
app.use('/users',usersRouter);