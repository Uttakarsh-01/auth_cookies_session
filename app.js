const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { Result } = require('postcss');
const jwt = require('jsonwebtoken');
app.use(cookieParser())

// app.get("/",function(req,res){
//     res.cookie("name","uttakarsh");
//     res.send('done');
// })

//encrypt using bcrypt

// app.get("/",function(req,res){
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash("pololoooo",salt,function(err,hash){
//             console.log(hash);
//         })
//     })
// })


//compare hash
// app.get("/",function(req,res){
//     bcrypt.compare("pololololoo","$2b$10$B5CZ16prwkyFMDNvU1OYPeytcyziyjci.EoIKbW3lqU/KZaAOA/wm",function(err,result){
//         //result = true
//         console.log(result)

//     });
// })

// app.get("/read",function(req,res){
//    console.log(req.cookies);  
//     res.send('hey there');

// })



//jwt

app.get("/",function(req,res){
    let token = jwt.sign({email: "uttakarsh405@gmail.com"},"secret");
    res.cookie("token",token);
    res.send("done");
    console.log(token)
})

app.get("/read",function(req,res){
    console.log(req.cookies.token);
})

app.get("/read",function(req,res){
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);
