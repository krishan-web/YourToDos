import React, { useEffect, useState } from 'react'
import styles from './Navbars.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Navbars(props) {
      
       const [user,setUser]=useState(null)
 
  useEffect(()=>{

    const token = localStorage.getItem('token');
    
      function parseddata(data){
        // console.log(data);
        console.log(data);
        if(data.password){
        setUser(data.password);
        }
      }
    
      function callback(res){
        res.json().then(parseddata);
      }  
      
      fetch("http://localhost:3000/user/me",{
        method:"GET",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      }).then(callback)
  },[])


  if(user){
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-grey   border-body" data-bs-theme="dark">
    <div className="container-fluid">
    <Link to="/" style={{textDecoration:'none'}}><a className="navbar-brand h1" style={{color:'#F9EBD9'}}>YourToDos</a></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/List">List</Link>
          </li>
        </ul>
        <form className="d-flex mx-3" role="Login">
        <Link to="/Login"><button className={styles.login}type="submit"  onClick={()=>{localStorage.removeItem('token'); setUser(null);}}>Sign Out<FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </form>
      </div>
    </div>
  </nav>
      </>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-grey   border-body" data-bs-theme="dark">
  <div className="container-fluid">
  <Link to="/" style={{textDecoration:'none'}}><a className="navbar-brand h1" style={{color:'#F9EBD9'}}>YourToDos</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/List">List</Link>
        </li>
      </ul>
      <form className="d-flex mx-3" role="Login">
      <Link to="/Login"><button className={styles.login}type="submit">Sign In<FontAwesomeIcon icon={faArrowRight} /></button></Link>
      </form>
      <form className="d-flex" role="Signup">
        <Link to="/Signup"><button className={styles.login}type="submit">Signup<FontAwesomeIcon icon={faArrowRight} /></button></Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbars
