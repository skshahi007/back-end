import jwt from 'jsonwebtoken'
import { getGoogleUser } from "../admin-util/getGoogleUser.js";
import { updateOrCreateGoogleOauth } from "../admin-util/updateOrCreateGoogleOauth.js";

export const adminGoogleCallbackOauthRoute = {
    path: '/admin-api/google/callback',
    method: 'get',
    handler: async (req, res) => {
        const { code } = req.query;
        const oAuthUserInfo = await getGoogleUser({ code });
        
        const updatedUser =await updateOrCreateGoogleOauth({ oAuthUserInfo });
        
        const { id, email, isVerified, name, picture_url }= updatedUser;

       
        jwt.sign( {
            id ,
            email,    
            name,            
            isVerified ,
            picture_url
            }, process.env.JWT_SECRET, 
            {expiresIn : "30d"},
            (err ,token ) => {
                if(err){
                    return res.status(500).json(err);
                }
        
                res.redirect(`http://localhost:3000/guru/login/${token}`)
            } );

    }
}