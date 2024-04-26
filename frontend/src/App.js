import React,{useEffect, useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbars';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import List from './Components/List';
import {RecoilRoot} from 'recoil';


function App() {
  const [position,setPosition]=useState('false');
  // const [token,setToken]=useState('');
  
  function positionClick(){
    if(position)setPosition(false);
    else setPosition(true);
  }
  
  // function valueset(token){
  //      setToken(token);
  // }
    
  return (
    <div>
      <RecoilRoot>
       <Navbar handleClick={positionClick}/>
       <Routes>
       <Route exact path="/" element={<Form/>}/>
       <Route exact path="/List" element={<List/>}/>
       <Route exact path="/Login" element={<Login/>}/>
       <Route exact path="/Signup" element={<Signup/>}/>
       </Routes>
      </RecoilRoot>
       {/* <button onClick={()=>{
        localStorage.removeItem('token');
       }}>LogOut</button> */}
    </div>
  );
}

export default App;

// tokenValue={valueset} 