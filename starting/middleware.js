const express=require("express")

const app = express();

//server p kiyni bhi request ajye phele y chlega 
app.use(function(req,res,next){

    console.log("middleware chl gya ");
    next();

})

app.get("/", function(req, res)  {
  res.send("i m katariya ")
})
app.get("/about", function(req, res)  {
    res.send("about page ayega ")
  })
  app.get("/profile", function(req, res)  {
    res.send("profile page ayega ")
  })


//error handling 

//this goes on terminal
app.get("/profile", function(req, res,next)  {
    return next(new error("something worng  "))
  });



//this goes on frontend 
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

// app.listen(3004);
