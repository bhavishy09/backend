const express=require("express")

const app = express();

const path=require("path");

app.set("view engine","ejs");

const usermodel=require('./models/user');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join( __dirname,'public'
)))



app.get("/", function(req, res)  {
  res.render("indexx")
})

app.get("/read", async function(req, res)  {

    let users= await usermodel.find();

    res.render("read",{users})
  })

  app.get("/delete/:id", async (req, res) => {

    let users= await usermodel.findOneAndDelete
    ({_id: req.params.id});

    res.redirect("/read")
  })


  app.post("/create", async (req, res)=>  {

    let{name,email,img}=req.body;

    let createuser=await usermodel.create({
        name,email,img
    });

    res.redirect("/read");
    
   
  })
  

app.listen(3004);
