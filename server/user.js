const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req,res){
  User.find({}, function(err,doc){
    return res.json(doc)
  })
})

// body-parser required
Router.post('/list', function(req,res){
  const {user,password,type} = req.body
  User.findOne({user: user}, function(err,doc){
    if(doc){
      return res.json({code:1, msg:"repeated username"})
    }
    User.create({user,password,type}, function(e,d){
      if(e){
        return res.json({code:1, msg:'error'})
      }
      return res.json({code:0})
    })
  })
})

Router.get('/info', function(req,res){
  return res.json({code:1})
})

module.exports = Router