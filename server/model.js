const mongoose = require('mongoose')
const DB_URL = 'mongodb:loaclhost:27017/chat'
// https://github.com/Automattic/mongoose/issues/5399
mongoose.connect(DB_URL)

const models = {
    user: {
        'username': {type:String, require:true},
        'password': {type:String, require:true},
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}