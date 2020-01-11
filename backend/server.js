/* Express is the NodeJS webapp servre framework
    CORS is a nodejs package or providing connect/express middleware
    Mongoose is used for the backend  */
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


/* Connect to Mongoose The ATLAS_URI is connected to .env, which has the link that connects this to mongodb 
    Atlas using the link  */
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open' , ()=>{
    console.log("MongoDB database connection established sucessfully");
})



/* Here, we are saying that technically to acess our routes, we would have /route/user etc. 
So, to increase ease of use, instead of /routes/users, use /users   */
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises' , exercisesRouter);
app.use('/users', usersRouter);



/*  listen to the connection in the port. If there is a sucessful connectoin, tell me */
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})