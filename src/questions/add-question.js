import { getDbConnection } from "../db.js";

export const addQuestion = {
    path : "/api/add-question",
    method :"post",
    handler : async (req ,res ) => {
        
        const {values, subjectCode } = req.body;
        
        const db = getDbConnection('abhyasham');
        const result = await db.collection(`${subjectCode}`).insertOne(values);
        res.status(200).json({result});
    }

}