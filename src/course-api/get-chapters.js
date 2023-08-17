import { getDbConnection } from "../db.js";

export const getChapters = {
    path: '/api/get-chapters',
    method: 'post',
    handler: async (req ,res ) => {

        const db=getDbConnection('abhyasham');
        const {subjectCode}=req.body;

        const result =await db.collection('subjects-list').findOne({subjectCode});
        const {chapterNames }= result;
        
        

        return res.status(200).json(chapterNames);
    }
}
