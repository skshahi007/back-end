import { getDbConnection } from "../db.js"

export const getQuestions = {
    path : '/api/get-questions',
    method : 'post',
    handler : async (req , res ) => {
        const {id, email, subjectCode }= req.body;
        const db=getDbConnection('abhyasham');
        const user = await db.collection('admin-auth').findOne({email});
        
        const {_id , email: userEmail}=user; 
        const userId=_id.toHexString();
        
        if(id==userId && email == userEmail ){
        
            const query= {addedById : id}
            const data= await db.collection(subjectCode).find(query).toArray();
        
            res.status(200).json({data});
        }else {
            res.status(401).json({"message":"Not Authorized"});
        }
    }
}