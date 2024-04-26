const mongoose=require("mongoose");

// Creating the Schema for user and todo
const userSchema=new mongoose.Schema({
    FirstName:String,
    LastName:String,
    useremail:String,
    password:String,
});


const todoSchema=new mongoose.Schema({
   title:String,
   description:String,
   user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
});

// Creating the model
const User=mongoose.model('User',userSchema);
const Todo=mongoose.model('Todo',todoSchema);

module.exports={
    User,
    Todo
}