const express = require('express');
const res = require('express/lib/response');
const app = express()
const router = express.Router()
const mongoose = require('mongoose');





mongoose.connect('mongodb://localhost:27017/jobready', { useNewUrlParser: true, UseUnifiedTopology: true }, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("mongodb connetion successfull")
    }
})
const schema = mongoose.Schema

const userschema = new schema({
    usertype: String,
    fullname: String,
    phonenumber: Number,
    location: String,
    skill: String,
    username: String,
    password: String
})
var usermodel = mongoose.model('users', userschema)

router.post('/registeruser', function (req, res) {

    usermodel.findOne({ username: req.body.username}).then((userexist) => {
        if (userexist ) {
            return res.status(422).json({ error: "user exist" });
          
        }
        const newuser = new usermodel({
            usertype: req.body.usertype,
            fullname: req.body.fullname,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            skill: req.body.skill,
            username: req.body.username,
            password: req.body.password,
        })
        newuser.save(function (err) {
            if (!err) {
                res.send('User Registration successfully')
            }
            else {
                res.send(err)
            }
        })

    })

})


// router.post('/loginuser' , function (req , res) {
//     usermodel.find({
//          username : req.body.username,
//         password : req.body.password})   
// }, function (err , documents) {
//     if(err){
//         res.send("something went wrong")
//     }else{
//         if(documents.length==0){
//             res.send("Login failed")
//         }else{
//             res.send("login successfull")
//         }
//     }
// })

router.post('/getjobseeker' , function (req,res) {
    usermodel.find({usertype: 'Job seeker'},function (err , documents) {
        if(err){
            res.send("something went wrong")
        }else{
            res.send(documents);
        }
    })
})

module.exports = router