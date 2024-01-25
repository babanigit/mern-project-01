const mongoose = require("mongoose");

// will hide this DB data afterwards
const DB ="mongodb+srv://creativeap07:creativeap07@cluster0.dzqxtv5.mongodb.net/mern?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful, inside conn.js ");
  })
  .catch(() => {
    console.log("no connection");
  });
