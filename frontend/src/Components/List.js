import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {atom,selector,useRecoilState,useRecoilValue} from 'recoil';
import Update from './Update/Update';
function List() {

    const [todolist,setTodoList]=useState([]);
    // const setTrigger=useSetRecoilState(false);
    // const Trigger=useRecoilValue();
    const [popup,setPopUp]=useState(false);
    const [arr,setArr]=useState(["https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
               "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
               "https://images.pexels.com/photos/17532476/pexels-photo-17532476/free-photo-of-close-up-of-wolf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
               "https://images.pexels.com/photos/17527188/pexels-photo-17527188/free-photo-of-mauritius-kestrel-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
               "https://images.pexels.com/photos/17301526/pexels-photo-17301526/free-photo-of-close-up-of-a-macaque-monkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
               "https://images.pexels.com/photos/18761753/pexels-photo-18761753/free-photo-of-sea-lions-lying-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
               "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               "https://images.pexels.com/photos/259291/pexels-photo-259291.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",  
               "https://i.pinimg.com/564x/60/8d/e5/608de558b093c9da0b7687921dfe1247.jpg",
               "https://i.pinimg.com/564x/7d/73/33/7d7333105c711eee5a2b18cdff2e7bfe.jpg",
               "https://i.pinimg.com/736x/4d/ec/43/4dec43e02041e48cddf83ce275e9b594.jpg",
               "https://i.pinimg.com/564x/ba/3d/71/ba3d713a4e06f255339b9fbc988d3919.jpg",
               "https://i.pinimg.com/564x/03/32/73/0332735668ab07cbb35ccd856ad29e00.jpg"
            ])
    function parsedresponse(data){
        // console.log(data.todo.map(elem=>{
        //     return elem._id;
        // }));
        console.log(JSON.stringify(data))
        setTodoList(data);
    }

    function callback(resp){
        resp.json().then(parsedresponse);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');

        fetch("http://localhost:3000/user/list",{
            method:"GET",
        headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
        }      
    }).then(callback).catch((err)=>console.log(err.message+"Please resolve this problem."));
     // eslint-disable-next-line 
    },[])

  
    function handleDelete(id){
       const token = localStorage.getItem('token');
       fetch("http://localhost:3000/user/delete",{
           method:"POST",
           body:JSON.stringify({
            id:id
           }),
           headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
           }
        }).then(res=>{res.json()}).then((data)=>console.log(data));

        fetch("http://localhost:3000/user/list",{
                method:"GET",
            headers:{
                "Content-Type":"application/json",
                'Authorization': `Bearer ${token}`
            }      
        }).then(callback).catch((err)=>console.log(err.message+"Please resolve this problem."));
         
    }

//   return (
//     <div style={{ display:"flex",flexWrap:"wrap",paddingLeft:"20px"}}>
//      { todolist.length>0?todolist.map((todo)=>{
//         return <div className='d-flex justify-content-evenly my-4' key={todo.title} 
//         style={{ display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center", height:"400px",width:"400px" ,border:"1px solid white",padding:"10px"}} >

//             <h3 style={{color:"white"}}>{todo.title}</h3>
//             <p style={{color:"white"}}>{todo.description}</p>
//             <img src={"https://images.unsplash.com/photo-1615796153287-98eacf0abb13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
//             style={{height:"250px",width:"391px"}}
//             alt="Error"/>
//             <button className='btn btn-primary' onClick={()=>{handleDelete(todo._id)}}>Delete</button>
//         </div>
//       }):"Wait for second"}
//     </div>
//   )

  return (
    <><div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%",height:"100%",padding:"30px",marginBottom:"-100%" }}>
     { todolist.length>0?todolist.map((todo)=>{
       return <Card style={{display:"flex",flexDirection:"column",padding:"10px",margin:"10px",width:"27%"}} key={todo.title} >
        <CardMedia component="img" alt="green iguana" height="200" image= {arr[Math.floor(Math.random() * 13)]}/>
        <CardContent style={{display:"flex",flexDirection:"column"}}> 
          <Typography gutterBottom variant="h4" component="div">{todo.title}</Typography>
          <Typography variant="body2" color="text.secondary">{todo.description}</Typography>
        </CardContent>
        <CardActions style={{display:"flex",justifyContent:"space-between"}}>
          <Button size="large" onClick={()=>setPopUp(true)}>Update</Button>
          <Button size="large" onClick={()=>{handleDelete(todo._id)}}>Delete</Button>
        </CardActions>
      </Card>
      }):"Loading....."}
    </div>
      <Update style={{position:"absolute"}}trigger={popup}/>
      </> 
  )
  


}

export default List


