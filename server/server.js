const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())

app.get('/', function(req, res){
	return res.json({code: 35})
})
app.use('/user', userRouter)
app.listen(7070,function(){
	console.log('Node app start at port 7070')
})



