const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const usermodel = require("./models/user");
const jwt=require('jsonwebtoken')

const app = express();
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('ind');
});

app.post('/create', (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await usermodel.create({
        username,
        email,
        password: hash,
        age
      });
       const token=jwt.sign({email},"shhhhhh");
    
       res.cookie("token",token)
      res.send(createdUser);
    });
  });
});

app.get("/logout",(req,res)=>{
    res.cookie("token","")
    res.redirect("/")

})




app.post("/login",async (req,res)=>{

    let user= await usermodel.findOne({email:req.body.email});
    if(!user)  return res.send("something worng");

bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
        let token = jwt.sign({ email: user.email }, "shhhhhhhhhhh");
        res.cookie("token", token);
        res.send("yes you can login");
    }
    else res.send("something is wrong");
})
      
});

app.get("/login",(req,res)=>{
    res.render("login")
})



app.listen(3001);
