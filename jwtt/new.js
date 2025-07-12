const express=require('express');
const cookieparser=require('cookie-parser');

const app=express();
app.use(cookieparser());
const bcrypt=require('bcrypt');

// app.get('/', function(req,res){
   
//     res.cookie("name","bhavishya");
//     res.send("done")
// })

// app.get('/read', function(req,res){
   
//    console.log(req.cookies)
//     res.send(" read done")
// })

//encyption
// app.get('/', function(req,res){
   
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("plolololololo", salt, function(err, hash) {
//             console.log(hash);
//         });
    
// });
// })

//dcryption
// app.get('/', function(req,res){
   
//     bcrypt.compare("plolololololoo","$2b$10$24L3YMSQDug7wCzhulFvb./Nb7LBztxKMVYjPiZPeWqaIxI7Z4S3S", function(err, result) {
//         console.log(result)
//        });
// })

//jwt 
const jwt = require('jsonwebtoken');

app.get("/",function (req,res){

    let token=jwt.sign({email:"bhavushya.com"},"secret");
    //send string to brwoswer
    res.cookie("token",token);
   res.send("done");
})

app.get("/read",function(req,res){
    let data =jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);
