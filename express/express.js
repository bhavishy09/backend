
const express=require("express")

const app = express();

app.get("/", function(req, res)  {
  res.send("i m katariya ")
})

app.get("/profile", function(req, res)  {
    res.send("i m best ")
  })
  

// app.listen(3003);