const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res){
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})

Router.post('/register', function(req, res){
    const { username, password } = req.body.data
    User.create({username, password}, function(e,d){
        return res.json({code: 0})
    })
})

Router.get('/info', function(req, res){
    return res.json({code: 3})
})

module.exports = Router