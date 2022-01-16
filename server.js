const express = require('express')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const userroute = require('./Routes/userroute')

app.use('/api/user' , userroute)

app.get('/' , function(req,res){
    res.send('This is from node js');
})

app.get('/api/helloworld' , function(req,res){
    res.send('This is helloworld from node js');
})

app.listen(5000, function () {
    console.log("node js server is started")
})
