import { getDbConnection } from "../db.js";

export const getCourses = {
    path: '/api/get-standards',
    method: 'get',
    handler: async (req ,res ) => {

        const db=getDbConnection('abhyasham');


        const result =await db.collection('course-list').find({}).toArray( (err,res) => {
        	if(err) return res.status(501).json({err});
        	

		
        });

        return res.status(200).json(result);
    }
}
