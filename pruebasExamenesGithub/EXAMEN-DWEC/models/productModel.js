const {model, Schema} = require('mongoose')

const productSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
})

const ProductModel = model('products', productSchema)
module.exports = {ProductModel:ProductModel}