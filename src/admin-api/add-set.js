import { getDbConnection } from "../db.js";
import { nextCode } from "../helper/nextCode.js";
import { ObjectId } from "mongodb";

export const addSet = {
    path: '/api/add-set',
    method: 'post',
    handler: async (req ,res ) => {
        const {addedById } =req.body;

        const db=getDbConnection('abhyasham');        
        var myQuery= { _id : new ObjectId(addedById)};
        const user =await db.collection('admin-auth').findOne(myQuery);
        console.log(req.body)
        if(user){
            
            
            try {
                const result =await db.collection('sets-list').insertOne(req.body)
                console.log(result)               
                res.status(200);
            } catch (error) {
                console.log(error);
                res.status(500);
            }
            
        }
    }
}