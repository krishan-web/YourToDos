import React,{useState} from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    const handlePassword = (event) => {
        setPassword(event.target.value);
      };

    // For subsequent requests, include the token in the Authorization header
// const token = localStorage.getItem('token');
// fetch('http://localhost:3000/login', {
//   headers: {
//     'Authorization': `Bearer ${token}`
//   }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//   // Handle the response data
// });

    // function parsedresponse(data){
    //     console.log(data);
    //     // const token = data.token;
    //     localStorage.setItem('token', data.token);
    //     // {props.tokenValue(data.token)}
    // }

    // function callback(resp){
    //     resp.json().then(parsedresponse)
    // }

    const onPress=async()=>{
       const res=await axios.post("http://localhost:3000/user/login",{
        useremail:email,
        password:password
       }).catch(error => {
        // Handle error
        console.log(error);
      });

      const data=res.data;
      localStorage.setItem('token', data.token);
        // fetch("http://localhost:3000/user/login",{
        //     method:"POST",
        //     body:JSON.stringify({
        //         useremail:email,
        //         password:password
        //     }),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // }).then(callback)
       navigate('/');
    }

  return (
    <div className={styles.login} style={styles}>
    <h1 style={{paddingLeft:'22px'}} >Enter Your Credentials</h1>
    <div className={styles.login1}>
    <div className={styles.email}>
       <label htmlFor="staticEmail" className={styles.email1} >Email</label>
       <input type="text" value={email} onChange={handleEmail} id="staticEmail" placeholder='Enter Your Email'/>  
    </div>
    <div className={styles.pass} >
       <label htmlFor="inputPassword" className={styles.pass1}>Password</label>
       <input type="password" value={password} onChange={handlePassword}   id="inputPassword" placeholder='Enter Your Password'/>
    </div>
    </div>
    <div className={styles.btn}>
       <button className=" mx-2 my-4 btn btn-success " onClick={onPress} >Login</button> 
    </div>
    </div>
  )
}
export default Login


