const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
// work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

// io is global while socket is the current one
io.on('connection', function(socket){
	console.log('user login')
    socket.on('sendmsg', function(data){
		console.log(data)
		io.emit('recevmsg', data)
	})
})

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
server.listen(7000,function(){
	console.log('Node app start at port 7000')
})



