const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world  from the server router js");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  // those three lines are for checking if postman is working properly or not??
  console.log("name is : " + name);
  console.log("email is : " + email);


});

module.exports = router;
