import { getDbConnection } from "../db.js";


export const addCodeName = {
    path: '/api/add-code-name',
    method: 'post',
    handler: async (req ,res ) => {
       

        const db=getDbConnection('abhyasham');
        
        
        
                const result=db.collection("course-details").insert({
                    details:"code",
                    availableCode : "aa"
                })
                res.status(200);
    } 

            
        
}
