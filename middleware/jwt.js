const jwt=require('jsonwebtoken')

const checkToken=(req,res,next)=>{
    try{
        const user={
            role:"admin"
        }
        const token=req.headers.authorization.split(" ")[1]
        const tok=jwt.verify(token,"SECRET KEY")
        const decoded=jwt.decode(token)
        req.user={role:decoded.role}
        next()
    }catch(err){
        console.log(err)
        return res.status(404).json({message:"Auth failed"})
    }
}

module.exports=checkToken