import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'
import axios from 'axios'

function Form(props) {
   const navigate=useNavigate();

   const [title,setTitle]=useState('');
   const [desc,setDesc]=useState('');
  //  const [image,setImage]=useState('');

   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/Login');
      }
   },[])

   const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  // const handleImage=(event)=>{
  //   setImage(event.target.value);
  // }

  //  function parsedata(data){
  //    console.log(data);
  //  }
    
  //  function callback(res){
  //    res.json().then(parsedata)
  //  }

   const postTodo=async()=>{
    const token = localStorage.getItem('token');
    const res=await axios.post("http://localhost:3000/user/todo", {
      title: title,
      description: desc
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).catch(error => {
      // Handle error
      console.log(error);
    });
    
    const data=res.data;
    console.log(data);
    // fetch("http://localhost:3000/user/todo",{
    //     method:"POST",
    //     body:JSON.stringify({
    //         title:title,
    //         description:desc
    //     }),
    //     headers:{
    //         "Content-Type":"application/json",
    //         'Authorization': `Bearer ${token}`
    //     }
    // }).then(callback)

    setTitle('');
    setDesc('');
}

  return (
    <div className={styles.form}>
       <div className={styles.title} >
         <label for="title" className="form-label">Title</label>
         <input value={title} onChange={handleTitle} style={{borderRadius:"15px",padding:"20px"}} type="text"  id="title" placeholder="Enter the title"/>
       </div>
       <div className={styles.desc}>
         <label for="description" className="form-label">Description</label>
         <textarea value={desc} onChange={handleDesc} style={{borderRadius:"15px",padding:"20px",paddingRight:"60px"}} id="description" placeholder='Enter the Description'></textarea>
       </div>
       {/* <div className={styles.desc}>
         <label for="Image" className="form-label">Image Link</label>
         <textarea value={image} onChange={handleImage} style={{borderRadius:"15px",padding:"20px",paddingRight:"60px"}} id="description" placeholder='Enter the Image Link'></textarea>
       </div> */}
       <div className={styles.btn}>
         <button className='btn btn-success' style={{padding:'10px',width:'90px'}} onClick={postTodo}>Create</button>
       </div>
    </div>
  )
}

export default Form
