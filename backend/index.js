// import { request } from "express";
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

dotenv.config({ path:'./config.env'});

const PORT =  process.env.PORT_URL || 3001;


// we exported conn.js 
require("./db/conn")

// this will enable us to use 'json' formatted data
app.use(express.json());

// for routing to router/auth
app.use(require('./router/auth'));



// // Middleware

// const middleware = (req, res, next) => {
//   console.log("hello my middleware");
//   next();
// };

// app.get("/", (req, res) => {
//   res.send("hello world  from the server");
// });

// app.get("/about", middleware, (req, res) => {
//   res.send("hello about world  from the server");
// });

app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
