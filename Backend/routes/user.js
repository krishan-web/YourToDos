const express = require('express')
const jwt =require('jsonwebtoken')
const mongoose=require('mongoose')
const {User,Todo}=require("../db");
const {userAuthenticate,SECRET}=require("../middleware/auth");

const router=express.Router();

router.post('/Signup',async(req,res)=>{
    const {FirstName,LastName,useremail,password}=req.body;
    const ValueExist=await User.findOne({useremail});
    if(ValueExist){
        res.status(403).json({message:"User Already Existed."});
    }else{
        const newuser=await User.create({FirstName,LastName,useremail,password});
        // another way to implement this 
        // const newuser=await User({useremail,password});
        // await newuser.save();
        const token=jwt.sign({password},SECRET,{expiresIn:'1hr'})
        res.status(200).json({message:"User created successfully",token});
    }
})

router.post('/login',async(req,res)=>{
    const {useremail,password}=req.body;
    const ValueExist= await User.findOne({useremail,password});
    if(ValueExist){
        const token=jwt.sign({useremail,password},SECRET,{expiresIn:'1hr'});
        res.json({message:'Logged in Successfully',token});
    }else {
        res.status(403).json({message:'Invalid Credential'});
    }
})

router.post('/todo',userAuthenticate,async(req,res)=>{ 
    const user1 = await User.findOne({ useremail: req.user.useremail });
    const todo=new Todo({...req.body,user_id:user1._id});
    await todo.save();
    res.json({message:'Todo created Successfully',todoId:todo.id});
})

router.post('/delete',userAuthenticate,async(req,res)=>{
    const todoId = req.body.id;
    console.log(todoId);
    try{
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        if (!deletedTodo) {
          return res.status(404).json({ message: 'Todo not found' });
        }
   // Respond with success message
   res.status(200).json({ message: 'Todo deleted successfully' });
 }catch (error) {
   console.error('Error deleting Todo:', error);
   res.status(500).json({ message: 'Internal server error' });
 }
})

router.get('/list', userAuthenticate, async (req, res) => {
    try {
        const user = await User.findOne({ useremail: req.user.useremail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const todos = await Todo.find({ user_id: user._id });
        console.log(todos);
        res.json( todos );
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/me',userAuthenticate,(req,res)=>{
    console.log(req.user); // Check what req.user contains
    if (req.user && req.user.password) {
        console.log(req.user.password);
        res.json({ password: req.user.password });
    } else {
        res.status(401).json({ error: 'User not authenticated or FirstName not available' });
    }
})

module.exports=router