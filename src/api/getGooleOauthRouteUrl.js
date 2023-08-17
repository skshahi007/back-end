import { getGoogleOauthUrl } from "../util/getGoogleOauthUrl.js";

export const getGoogleOauthUrlRoute = {
    path : '/api/google/url',
    method:'get',
    handler : (req, res ) => {
        const url=getGoogleOauthUrl();
        res.status(200).json({url});
    }
};