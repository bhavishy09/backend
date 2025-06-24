const express= require('express');
const app=express();
const path=require('path')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//routing 
app.get("/",function(req,res){
    res.render("projectsetup");
});

//dynamic routing 
app.get("/profile/:user",function(req,res){
    res.send(`welcome to our site ,${req.params.user}`);
});

app.listen(3001,function(){
    console.log("run")
})
