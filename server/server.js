const express = require("express")
const mongoose = require("mongoose")
const DB_URL = "mongodb://127.0.0.1:27017"
mongoose.connect(DB_URL)
mongoose.connection.on("connected", function(){
  console.log("mongo connect success");
})

const User = mongoose.model("user", new mongoose.Schema({
  user:{
    type: String,
    require: true
  },
  age:{
    type: Number,
    require: true
  }
}))

User.create({
  user: "Jasmine",
  age: 23
}, function(err, doc){
  if(!err){console.log(doc);}
  else{console.log(err);}
})

User.remove({age: 23}, function(err, doc){
  console.log(doc);
})

User.update({"user": "Judy"},{"$set": {age: 18}}, function(err, doc){
  console.log(doc);
})
// below
const app = express()

app.get("/", function(req, res){
  res.send("<h1>Hello Judy! Good day!!</h1>")
})

app.get("/data", function(req, res){
  User.findOne({user: "Judy"}, function(err, doc){
    res.json(doc)
  })
})

app.listen(7777,function(){
  console.log("node app start at 7777");
})
