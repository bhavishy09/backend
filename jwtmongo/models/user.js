const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://futuresingh111:W1jc8OltvGz1Cpbo@cluster0.zjaogcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const useSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
});

module.exports=mongoose.model("user",useSchema);