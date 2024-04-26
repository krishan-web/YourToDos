const jwt =require('jsonwebtoken')

const SECRET='hi169lm'; // This should be in an environment variable in a real application

//Cookies are the better way to implement authentication.
function userAuthenticate(req,res,next){

    const tokenValue=req.headers.authorization;
    if(tokenValue){
        const token=tokenValue.split(' ')[1];
        jwt.verify(token,SECRET,(err,user)=>{
            // console.log(user);
            if(err){
               return res.sendStatus(403);
            }
            req.user=user;
            next();
        })
    }else{
        res.status(401).json({message:'Error'})
    }
}

module.exports={
    userAuthenticate,
    SECRET
}
