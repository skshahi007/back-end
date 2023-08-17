import { getDbConnection } from "../db.js";
import { nextCode } from "../helper/nextCode.js";
import { ObjectId } from "mongodb";

export const addCourseName = {
    path: '/api/add-course-name',
    method: 'post',
    handler: async (req ,res ) => {
        const {addedById , name } =req.body;

        const db=getDbConnection('abhyasham');
        console.log(addedById)
        var myQuery= { _id : new ObjectId(addedById)};
        const user =await db.collection('admin-auth').findOne(myQuery);
        console.log("user:",user)
        if(user){
            const code=await db.collection("course-details").findOne({details:"courseCode"});
            console.log(code);
            try {
                const result =await db.collection('course-list').insertOne({
                    name:name,
                    courseCode:code.availableCode,    
                    subjects : [],
                    addedById
                })
                console.log(result)
                const nextAvailable=nextCode(code.availableCode);
                console.log(nextAvailable)
                const result1=await db.collection("course-details").updateOne({details : "courseCode"},{
                    $set : { availableCode:nextAvailable }
                }, (err ,res ) => {
                    if(err) throw err
                    console.log("updated nextCode: ",res)
                })
                
                res.status(200);
            } catch (error) {
                console.log(error);
                res.status(500);
            }
            
        }
    }
}