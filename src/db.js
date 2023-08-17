import {MongoClient } from 'mongodb';

let client;
export const initializeDbConnection = async () => {
    
    client = new MongoClient(process.env.MONGO_URI , {useNewUrlParser : true, useUnifiedTopology: true});
    await client.connect( err => {       
        const collection= client.db("test").collection("devices");
    });
    
    
    
    
}

export const getDbConnection = dbName => {  
    const db=client.db(dbName);
    return db;
}
