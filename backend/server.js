const express = require('express');
const cors = require('cors');
//uses express and cores
const mongoose = require('mongoose');

require('dotenv').config();
//allows us to put environment variables in our .env file

const app = express();
const port = process.env.PORT || 5000;
//allows our express server and what port it will be on

//middleware
app.use(cors());
app.use(express.json());
//allows us to parse json - server will be sending and receiving json

// const uri = process.env.ATLAS_URI; standared
const uri = process.env.ATLAS_URI;
//for it to work set the ATLAS_URI variable
//mongo URI need to get from Mongo dashboard
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
//useNewUrl parser - flag added because mongodb node js driver rewrote the tool to parse mongodb connection screens
//useCreateIndex parser - mongodb deprecated the sure index function
//mongoose.connect then pass in the URI - where database is stored

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
//what starts the server