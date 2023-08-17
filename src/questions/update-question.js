import { ObjectId } from "mongodb";
import { getDbConnection } from "../db.js";

export const updateQuestion = {
    path : "/api/update-question",
    method :"put",
    handler : async (req ,res ) => {
        const {values,subjectCode}=req.body;
        var myQuery= { _id : new ObjectId(values._id)};
        var newValues={            
            chapterName:values.chapterName,          
            level:values.level,
            question:values.question,
            optionA:values.optionA,
            optionB:values.optionB,
            optionC:values.optionC,
            optionD:values.optionD,
            correctOption:values.correctOption,
            explaination:values.explaination
            
        }        
        const db = getDbConnection('abhyasham');
        const result = await db.collection(req.body.subjectCode).updateOne(myQuery, {$set : newValues} , function(err, res){
            if(err) 
                console.log(err);
            console.log("1 document updated");
        });
        res.status(200).json({result});
    }

}