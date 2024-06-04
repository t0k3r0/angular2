const { UserModel } = require('../models/userModel')

const createUser = async(name,email,password)=>{

    const newUser = new UserModel({
        name:name,
        email:email,
        password:password
    })

    await newUser.save()
}

const findUser = async(name,password)=>{
    const user = await UserModel.findOne({
        name:name,
        password:password
    })
    return user
}

module.exports = {createUser, findUser}