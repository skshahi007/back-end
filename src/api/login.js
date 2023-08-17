import jwt from "jsonwebtoken";
import { getDbConnection } from "../db.js";
import bcrypt from 'bcrypt'
export const loginRoute = {
    path : '/api/login',
    method : 'post',
    handler : async (req , res ) => {
        const {email , password}=req.body;
        
        const db=getDbConnection('abhyasham');
        const user = await db.collection('auth-data').findOne({email});
        
        if(!user )  {
            
            return res.status(401).json({ "err":"User not Registerd" });
        }

        //const {}
        const { _id : id, name  , isVerified, passwordHash } = user;
        const isCorrect =await bcrypt.compare(password, passwordHash);

        if(isCorrect){
            jwt.sign( {
                id ,
                email,    
                name,            
                isVerified ,
                }, process.env.JWT_SECRET, 
                {expiresIn : "1d"},
                (err ,token ) => {
                    if(err){
                        return res.status(500).json(err);
                    }
                    return res.status(200).json({token});
                } );
        }else{
            return res.status(401).json({"err":"Password Not Correct"});
        }
        
    }
} 
