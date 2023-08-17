import { getDbConnection } from "../db.js";

export const updateOrCreateGoogleOauth = async ({ oAuthUserInfo }) => {
    var {
        id: googleId,
        verified_email: isVerified,
        email,
        name,
        picture: picture_url
    } = oAuthUserInfo;
    var space = String(name).indexOf(" ");
    var firstName = String(name).substring(0, space);
    var lastName = String(name).substring(space + 1);
    name = { firstName, lastName }
    const db = getDbConnection('abhyasham');
    const existingUser = await db.collection('auth-data').findOne({ email });

    if (existingUser) {
        const result = await db.collection('auth-data').findOneAndUpdate(
            { email },
            { $set: { name, googleId, isVerified, picture_url } },
            { returnOriginal: false },
        )

        return result.value;
    } else {
        var data = {
            email,
            googleId,
            isVerified,
            name,
            picture_url
        };
        const result = await db.collection('auth-data').insertOne(data)

        const { insertedId } = result;
        data = { insertedId, ...data };


        return data;
    }
}