const express = require('express')
const jwt =require('jsonwebtoken')
const mongoose=require('mongoose')
const cors=require('cors');
const userRouter=require('./routes/user.js');
// const cookieParser=require('cookie-parser');



const port = 3000
const app = express();
// const SECRET='hi169lm';

app.use(cors());
app.use(express.json())
app.use("/user",userRouter);
// // Creating the Schema for user and todo
// const userSchema=new mongoose.Schema({
//     FirstName:String,
//     LastName:String,
//     useremail:String,
//     password:String,
// });


// const todoSchema=new mongoose.Schema({
//    title:String,
//    description:String,
//    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
// });

// // Creating the model
// const User=mongoose.model('User',userSchema);
// const Todo=mongoose.model('Todo',todoSchema);

// Setting connection with the database.
mongoose.connect('mongodb+srv://mongo:Krishan123@todo.wryww.mongodb.net/',{useNewUrlParser:true,useUnifiedTopology:true,dbName:'todo'})
// (err)=>{
//     if(err) console.log(err.message);
//     else console.log("Successfully connected.")
// })

//Cookies are the better way to implement authentication.
// function userAuthenticate(req,res,next){

//     const tokenValue=req.headers.authorization;
//     if(tokenValue){
//         const token=tokenValue.split(' ')[1];
//         jwt.verify(token,SECRET,(err,user)=>{
//             // console.log(user);
//             if(err){
//                return res.sendStatus(403);
//             }
//             req.user=user;
//             next();
//         })
//     }else{
//         res.status(401).json({message:'Error'})
//     }
// }

// app.post('/Signup',async(req,res)=>{
//     const {FirstName,LastName,useremail,password}=req.body;
//     const ValueExist=await User.findOne({useremail});
//     if(ValueExist){
//         res.status(403).json({message:"User Already Existed."});
//     }else{
//         const newuser=await User.create({FirstName,LastName,useremail,password});
//         // another way to implement this 
//         // const newuser=await User({useremail,password});
//         // await newuser.save();
//         const token=jwt.sign({password},SECRET,{expiresIn:'1hr'})
//         res.status(200).json({message:"User created successfully",token});
//     }
// })

// app.post('/login',async(req,res)=>{
//     const {useremail,password}=req.body;
//     const ValueExist= await User.findOne({useremail,password});
//     if(ValueExist){
//         const token=jwt.sign({useremail,password},SECRET,{expiresIn:'1hr'});
//         res.json({message:'Logged in Successfully',token});
//     }else {
//         res.status(403).json({message:'Invalid Credential'});
//     }
// })

// app.post('/todo',userAuthenticate,async(req,res)=>{ 
//     const user1 = await User.findOne({ useremail: req.user.useremail });
//     const todo=new Todo({...req.body,user_id:user1._id});
//     await todo.save();
//     res.json({message:'Todo created Successfully',todoId:todo.id});
// })

// app.post('/delete',userAuthenticate,async(req,res)=>{
//     const todoId = req.body.id;
//     console.log(todoId);
//     try{
//         const deletedTodo = await Todo.findByIdAndDelete(todoId);

//         if (!deletedTodo) {
//           return res.status(404).json({ message: 'Todo not found' });
//         }
    
//    // Respond with success message
//    res.status(200).json({ message: 'Todo deleted successfully' });
//  }catch (error) {
//    console.error('Error deleting Todo:', error);
//    res.status(500).json({ message: 'Internal server error' });
//  }
// })

// // app.get('/list', userAuthenticate,async(req, res) => {
// //     const user1 = await User.findOne({ useremail: req.user.useremail });
// //     const todo=await Todo.find((todo)=>{todo.user_id===user1._id});
// //     console.log(todo);
// //     res.json({todo});
// // })

// app.get('/list', userAuthenticate, async (req, res) => {
//     try {
//         const user = await User.findOne({ useremail: req.user.useremail });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const todos = await Todo.find({ user_id: user._id });
//         console.log(todos);
//         res.json( todos );
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });


// app.get('/user/me',userAuthenticate,(req,res)=>{
//     // console.log(req.user.FirstName);
//     // res.json({FirstName:req.user.FirstName});

//     console.log(req.user); // Check what req.user contains
//     if (req.user && req.user.password) {
//         console.log(req.user.password);
//         res.json({ password: req.user.password });
//     } else {
//         res.status(401).json({ error: 'User not authenticated or FirstName not available' });
//     }
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})


//mongo
//Krishan123@
// connection string: mongodb+srv://mongo:Krishan123@todo.xqwfsml.mongodb.net/

