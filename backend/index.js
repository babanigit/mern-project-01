// import { request } from "express";
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const DB = 'mongodb+srv://creativeap07:creativeap07@cluster0.dzqxtv5.mongodb.net/mern?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=> {
    console.log("connection successful")
}).catch(()=> {
    console.log("no connection")
})

// this will enable us to use 'json' formatted data
app.use(express.json());

// for routing to router/auth
app.use(require('./router/auth'));

// Middleware

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("hello world  from the server");
// });

app.get("/about", middleware, (req, res) => {
  res.send("hello about world  from the server");
});

app.use(cors());
app.use(express.json());


app.listen(3001, () => {
  console.log("server is running at 3001");
});
