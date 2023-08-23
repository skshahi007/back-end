import { getGoogleOauthUrl } from "../admin-util/getGoogleOauthUrl.js";

export const adminGetGoogleOauthUrlRoute = {
    path : '/admin-api/google/url',
    method:'get',
    handler : (req, res ) => {
        const url=getGoogleOauthUrl();        
        res.status(200).json({url});
    }
};