const express = require('express')
const utils = require('utility')
const model = require('./model')
const Router = express.Router()
const User = model.getModel('user')

const _filter = {'password': 0}

Router.get('/list', function(req,res){
  User.remove({},function(e,d){})  // clear all
  User.find({}, function(err,doc){
    return res.json(doc)
  })
})

Router.post('/login', function(req,res){
  const {user, password} = req.body
  User.findOne({user, password: md5Pwd(password)},{'password':0} function(err,doc){
    if(!doc){
      return res.json({code:1,msg:'user or pwd error'})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0,data:doc})
  })
})

// body-parser required
Router.post('/register', function(req,res){
  const {user,password,type} = req.body
  User.findOne({user: user}, function(err,doc){
    if(doc){
      return res.json({code:1, msg:"repeated username"})
    }
    const userModel = new User({user,password: md5Pwd(password),type})
    userModel.save(function(e,d){
      if(e){
        return res.json({code:1, msg:'error!!!'})
      }
      const {user,type,_id} = d
      res.cookie('userid', _id)
      return res.json({code:0, data:{user,type,_id}})
    })
    // User.create({user,password: md5Pwd(password),type}, function(e,d){
    //   if(e){
    //     return res.json({code:1, msg:'error'})
    //   }
    //   return res.json({code:0})
    // })
  })
})

Router.get('/info', function(req,res){
  const { userid } = req.cookies
  if(!userid){
    return res.json({code:1})
  }
  User.findOne({_id: userid}, _filter, function(err,doc){
    if(err){
      return res.json({code:1, msg:'error!!!'})
    }
    if(doc){
      return res.json({code:0, data:doc})
    }
  })
  return res.json({code:1})
})

function md5Pwd(pwd){
  const salt = 'judy@yqazsy~'
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
