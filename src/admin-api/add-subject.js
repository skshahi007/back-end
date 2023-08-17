import { getDbConnection } from "../db.js";
import { ObjectId } from "mongodb";

export const addSubjectName = {
    path: '/api/add-subject-name',
    method: 'post',
    handler: async (req ,res ) => {
        console.log(req.body);
        var { subjectName,chapterNames, courseCode ,addedById,subjectCode} =req.body;

        const db=getDbConnection('abhyasham');
        var myQuery= { _id : new ObjectId(addedById)};
        const user =await db.collection('admin-auth').findOne(myQuery);
        if(user){
	        
            try{

                const result =await db.collection('course-list').updateOne({courseCode} , [ { $set : {subjects : { $concatArrays: [ "$subjects", [subjectName]  ] } } }]);
                console.log(result);
                subjectCode++;
                if(subjectCode<10){
                    var subCode=courseCode+"0"+subjectCode;
                }else{
                    var subCode=courseCode+subjectCode;
                }
                
                
                const res=await db.collection('subjects-list').insertOne({
                    subjectName ,
                    subjectCode: subCode,
                    chapterNames,
                    courseCode,
                    addedById
                })

            }catch(err){
                console.log(err);
            }

        }
    }
}
