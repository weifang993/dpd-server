import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";
import * as env from 'env-var';

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';
        const HOST = env.get('MONGODB_SERVICE_HOST').required().asString();
        const PORT = env.get('MONGODB_SERVICE_PORT').required().asIntPositive();
        const dbName = 'dpd';
        const url = 'mongodb://wei:pass1234@' + HOST + ':' + PORT + '/' + dbName;               
        const client = new MongoClient(url, { useNewUrlParser: true });
        return client.connect();
        
    }
}

