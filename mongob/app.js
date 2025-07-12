const express=require("express")

const app = express();

const usermodel=require('./usermodel')

app.get("/", function(req, res)  {
  res.send("i m katariya  ji")
})

// create
app.get("/create",  async function(req, res)  {
     let createduser= await usermodel.create({


        name:"bhavishya kaka",
    email:"kaaatariya@13.com",
    username:"bsk"

      })
      console.log(createduser);
      res.send(createduser);   
})
//update
app.get("/update",  async (req, res) => {
  let updateuser= await usermodel.findOneAndUpdate({
 username:"bk"},{name:"bhavishya the boss"},{new:true})

   
  
res.send(updateuser);   
})

//read
app.get("/read",  async (req, res) => {
  let reads= await usermodel.find();
  
  res.send(reads);
})

//delete
app.get("/delete",  async (req, res) => {
  let userss= await usermodel.findOneAndDelete({username:"bhavishya"});
  
  res.send(userss);
})

app.listen(3003);
