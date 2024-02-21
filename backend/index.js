// import { request } from "express";

const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors(
  {
    origin:["https://frontend-ivory-delta-77.vercel.app"],
    methods:["P0ST","GET"],
    credentials:true
    
  }
));

// sjust use it one time in index.js and no need to initialize it again and again
const dotenv = require("dotenv");
dotenv.config({ path:'./config.env'});


const PORT =  process.env.PORT_URL || process.env.PORT_NO;


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
