import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";
import * as env from 'env-var';

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';
        const HOST = env.get('MONGODB_SERVICE_HOST').required().asString();
        const PORT = env.get('MONGODB_SERVICE_PORT').required().asIntPositive();
        // mongo root password will be passed as env variable.
        const PASSWORD = env.get('MONGODB_ROOT_PASSWORD').required().asString();

        const dbName = 'dpd';
        const url = 'mongodb://root:' + PASSWORD + '@' + HOST + ':' + PORT;  
        console.log("Connect to db: " + url);
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        return client.connect();
        
    }
}

