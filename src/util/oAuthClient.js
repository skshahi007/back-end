import {google } from 'googleapis';

export const oAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.HOST}/api/api/google/callback`,
);