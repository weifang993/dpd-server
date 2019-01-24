import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';
        let mongodbUser = process.env.MONGODB_USER;
        let password = process.env.MONGODB_PASSWORD;
        let mongodbServiceName = process.env.DATABASE_SERVICE_NAME;

        // now for use in docker-compose, the host is 'mongo' as defined in the yaml
        const url = 'mongodb://' + mongodbUser + ':' + password + '@' + mongodbServiceName + ':27017';
        const dbName = 'dpd';        
        const client = new MongoClient(url, { useNewUrlParser: true });
        return client.connect();
        
    }
}

