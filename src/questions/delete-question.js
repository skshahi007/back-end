import { getDbConnection } from "../db.js"
import { ObjectId } from "mongodb";

export const deleteQuestion = {
    path : '/api/delete-question',
    method : 'put',
    handler : async (req,res) => {
        var myQuery= { _id : new ObjectId(req.body._id)};
        const db = getDbConnection('abhyasham');
        const result = await db.collection(req.body.subjectCode).deleteOne(myQuery, function(err, res){
            if(err) 
                console.log(err);
            console.log("1 document deleted");
        });
        res.status(200).json({result});
    }
    
}