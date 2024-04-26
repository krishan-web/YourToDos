import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'
import axios from "axios";

function Signup() {
  const navigate=useNavigate();
  const[first,setFirst]=useState('');
  const[last,setLast]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleFirst = (event) => {
    setFirst(event.target.value);
    console.log(event.target.value);
  };
  const handleLast = (event) => {
    console.log(event.target.value);
    setLast(event.target.value);
  };
  const handleEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };


  //   function parsedresponse(data){
  //     console.log(data);
  // }

  // function callback(resp){
  //     resp.json().then(parsedresponse)
  // }

  const onPress=async()=>{
     
    const res=await axios.post("http://localhost:3000/user/Signup",{ // axios it's an external library so we need to import it and install it.
      FirstName:first,
      LastName:last,
      useremail:email,
      password:password
    })
    const data=res.data;
    console.log(data);
    // event.preventDefault();
    // console.log(event);

      // fetch("http://localhost:3000/user/Signup",{ // it's an internal library 
      //     method:"POST",
      //     body:JSON.stringify({
      //         FirstName:first,
      //         LastName:last,
      //         useremail:email,
      //         password:password
      //     }),
      //     headers:{
      //         "Content-Type":"application/json"
      //     }
      // }).then(callback)

      // setFirst('');
      // setEmail('');
      // setLast('');
      // setPassword('');
      navigate('/Login');
  }
  

  return (
    <form className={styles.login}>
       <h1 >Enter Your Credentials</h1>
       <div className={styles.login1}>
      <div className={styles.box}>
      <label htmlFor="name">First Name</label>
      <input  value={first} onChange={handleFirst} type="text" id="name"/>
      </div>
      <div className={styles.box}>
      <label htmlFor="LastName">Last Name</label>
      <input value={last} onChange={handleLast} type="text" id="LastName"/>
      </div>
      <div className={styles.box}>
      <label htmlFor="Email">Email</label>
      <input value={email} onChange={handleEmail} type="email" id="Email"/>
      </div>
      <div className={styles.box}>
      <label htmlFor="Number">Password</label>
      <input value={password} onChange={handlePassword} type="password" id="Number"/>
      </div>
      <div className={styles.box} id={styles.btn}>
      <button type="submit" onClick={onPress} className="btn btn-success "style={{margin:"5px"}}>Submit</button>
       </div>
      </div>
    </form>
  )
}

export default Signup
