const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world  from the server router js");
});

// // using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cPassword } = req.body;

//   // those three lines are for checking if postman is working properly or not??
//   console.log("name is : " + name);
//   console.log("email is : " + email);
//   // res.json({ message: req.body });

//   if (!name || !email || !phone || !work || !password || !cPassword) {
//     // status(422)  this will give u error type
//     return res.status(422).json({ error: "pls fill the registration form" });
//   }

//   // note:- the below code gives u error cause its calling body twice , idk exactly yyy
//   // res.json({ message: req.body });

//   User.findOne({ email: email })
//     .then((userExist) => {
//       // if user exist then return error422
//       if (userExist)
//         return res.status(422).json({ error: "email already registered" });

//       const user = new User({ name, email, phone, work, password, cPassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user request successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "failed to registered " });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// using await async
router.post("/register", async (req, res) => {

  // this is request from postman or data stored using postman
  const { name, email, phone, work, password, cPassword } = req.body;

  // those three lines are for checking if postman is working properly or not??
  console.log("name is : " + name);
  console.log("email is : " + email);
  // res.json({ message: req.body });

  if (!name || !email || !phone || !work || !password || !cPassword) {
    // status(422)  this will give u error type
    return res.status(422).json({ error: "pls fill the registration form" });
  }

  // note:- the below code gives u error cause its calling body twice , idk exactly yyy
  // res.json({ message: req.body });

  try {
    const userExist = await User.findOne({ email: email });
    console.log(userExist);

    if (userExist)
      return res.status(422).json({ error: "email already registered" });

    const user = new User({ name, email, phone, work, password, cPassword });

    await user.save();

    res.status(201).json({ message: "user registered successfully in backend" });

  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
