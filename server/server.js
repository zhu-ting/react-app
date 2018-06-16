const express = require("express")
const userRouter = require('./user')

// below
const app = express()
app.use('/user', userRouter)

app.listen(9093,function(){
  console.log("node app start at 9093");
})
