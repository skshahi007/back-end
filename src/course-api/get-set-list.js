import { getDbConnection } from "../db.js";

export const getSetsList = {
    path: '/api/get-sets-list',
    method: 'post',
    handler: async (req ,res ) => {

        const db=getDbConnection('abhyasham');
        const {subjectCode, chapterNameIndex}=req.body;
        
        const result =await db.collection('sets-list').find({subjectCode , chapterNameIndex: chapterNameIndex.toString()}).toArray((err, result) =>{
            if (err) throw err;
        });
        

        return res.status(200).json(result);
    }
}
