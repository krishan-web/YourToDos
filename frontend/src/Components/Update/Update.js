import React,{useState} from 'react'
import styles from './Update.module.css'
function Update(props) {
    
   const [title,setTitle]=useState('');
   const [desc,setDesc]=useState('');
   
   const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };

  return (props.trigger)?(
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
      <button className='btn btn-success' style={{padding:'10px',width:'90px'}}>Update</button>
    </div>
 </div>):"";
}

export default Update
