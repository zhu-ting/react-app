const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

// below
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9093,function(){
  console.log("node app start at 9093");
})
