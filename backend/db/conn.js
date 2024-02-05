// THIS IS CONNECTION TO THE MONGODB 



const mongoose = require("mongoose");
// will hide this DB data afterwards
const DB ="mongodb+srv://creativeap07:creativeap07@cluster0.dzqxtv5.mongodb.net/mern?retryWrites=true&w=majority"

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful to the mongodb database.... :)");
  })
  .catch(() => {
    console.log("not connected to the database :(");
  });




//   let MongoClient = require('mongodb').MongoClient;
// MongoClient.connect(DB, function(err, client){
//   if(err) throw err;
//   let db = client.db('test');
//   db.collection('devices').find().toArray(function(err, result){
//     if(err) throw err;
//     console.log(result);
//     client.close();
//     });
//  });
