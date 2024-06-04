const  mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/mywebstore'


const db = async()=>{
    await mongoose.connect(uri)

}
try{
    db()
    mongoose.connection.on('open',()=>{
        console.log('conexion exitosa');
    })
}catch(e){
    mongoose.connection.on('error',()=>{
        console.log("Conexion Fallida");
    })
}


module.exports = db