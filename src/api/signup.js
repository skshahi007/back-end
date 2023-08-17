import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from "../db.js";
import dotenv from "dotenv"

dotenv.config();

export const signupRoute = {
    path : '/api/signup',
    method : 'post',
    handler : async (req,res ) => {
        
        const { name, email , password }=req.body;
       
        const db=getDbConnection('abhyasham');
       
        const user = await db.collection('auth-data').findOne({email});
       
        if(user){
            return res.status(400).send("user is already registered");
            
        }

        const passwordHash= await bcrypt.hash(password,10);
       

        
        const result = await db.collection('auth-data').insertOne({
            name,
            email,
            passwordHash,        
            isVerified : false
        });
        console.log(result);
        const {insertedId}=result;
        
        jwt.sign({
            id: insertedId,
            email,
            name,            
            isVerified : false,            
        },
        process.env.JWT_SECRET,
        {
            expiresIn : '1d'
        },
        (err, token) => {
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }
            console.log(token);
            res.status(200).json({token});

        });
       
    }
}
