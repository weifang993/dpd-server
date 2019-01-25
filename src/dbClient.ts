import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";
import * as env from 'env-var';

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';
        const HOST = env.get('MONGODB_SERVICE_HOST').required().asString();
        const PORT = env.get('MONGODB_SERVICE_PORT').required().asIntPositive();

        // now for use in docker-compose, the host is 'mongo' as defined in the yaml
        // const url = 'mongodb://admin:' + password + '@' + HOST + ':' + PORT;
        const url = 'mongodb://admin:BnWO8BOBw58yA62M@mongodb:27017';
        const dbName = 'dpd';        
        const client = new MongoClient(url, { useNewUrlParser: true });
        return client.connect();
        
    }
}

