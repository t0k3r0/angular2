const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

const UserModel = model('usuarios',userSchema)
module.exports = {UserModel:UserModel}