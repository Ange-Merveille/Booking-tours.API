const verifyAccess= (requiredRole)=>{
    return async (req,res,next)=>{

        try{
const {role}=req.user;
if(requiredRole!=role){
    return res.status(404).json({error:"Unauthorised! you do not have access to thi Api"});

}
return next ();
        }
        catch(err){
            console.log(err);

        }
    }
}
export default verifyAccess