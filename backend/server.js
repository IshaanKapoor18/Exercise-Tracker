const express = require("express");
const cors =  require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const Connection = mongoose.connection;
Connection.once('open', ()=>{
    console.log("MonogoDB database connection established sucessfully!!");
});

const excercisesRouter = require("./routes/excercises");
const usersRouter = require("./routes/users");

app.use('/exercises', excercisesRouter);
app.use('/users',usersRouter);


app.listen(port, ()=>{
    console.log("Connection Established!!");
    console.log(`Server Running at Port = ${port}`);
    console.log(`http://localhost:${port}`);
});