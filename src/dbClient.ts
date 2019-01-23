import { MongoClient, Db, Collection, CollectionInsertManyOptions } from "mongodb";

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';

        // now for use in docker-compose, the host is 'mongo' as defined in the yaml
        const url = 'mongodb://mongo:27017';
        const dbName = 'cds';        
        const client = new MongoClient(url, { useNewUrlParser: true });
        return client.connect();
        
    }
}

