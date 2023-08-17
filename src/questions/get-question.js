import { getDbConnection } from "../db.js"
import { ObjectId } from "mongodb";
export const getQuestion = {
    path: '/api/get-question',
    method: 'post',
    handler: async (req, res) => {
        const { id, subjectCode } = req.body;
        const db = getDbConnection('abhyasham');

        var myQuery= { _id : new ObjectId(req.body._id)};
        const data = await db.collection(subjectCode).findOne(myQuery);        
        res.status(200).json({ data });
    }
}