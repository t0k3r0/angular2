const express = require('express')
const app = express()

const morgan = require('morgan')
const { db }= require('./db')
const ejs = require('ejs')
const path = require('path')


app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')


app.use('/',require('./routes/index'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('SERVIDOR ABIERTO EN PUERTO 3000');