import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";
import * as env from 'env-var';

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{        
        const HOST = env.get('MONGODB_SERVICE_HOST').required().asString();
        const PORT = env.get('MONGODB_SERVICE_PORT').required().asIntPositive();
        const url = 'mongodb://' + HOST + ':' + PORT;  

        const dbName = 'dpd';
        //const url = 'mongodb://localhost:27017';
        console.log("Connect to db: " + url);
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        return client.connect();
        
    }
}

