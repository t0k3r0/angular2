const express = require("express")
const router = express.Router()
const {db} = require('./db')
router.get('/',  (req, res) =>{
    res.render("inicio")
})
router.post('/',(req,res)=>{
    res.render("inicio")
})

router.get('/login', (req, res) =>{
    const user = req.body
    if(user){
        res.redirect("/productosd")
    }else{
        res.send("Incorrecto")
    }
    res.render("login")
})



module.exports = router