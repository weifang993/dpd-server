import { MongoClient } from 'mongodb';
import * as env from 'env-var';

export class DBClient {

    constructor() {
    }

    connect() : Promise<MongoClient>{
        // const url = 'mongodb://localhost:27017';
        const USER = env.get('MONGODB_USER').default('root').asString();
        const PASSWORD = env.get('MONGODB_PASSWORD').asString();
        const HOST = env.get('MONGODB_SERVICE_HOST').required().asString();
        const PORT = env.get('MONGODB_SERVICE_PORT').required().asIntPositive();
        const dbName = 'dpd';

        let url = 'mongodb://' + HOST + ':' + PORT;                  
        if(PASSWORD != null) {            
            url = 'mongodb://' + USER + ':' + PASSWORD + '@' + HOST + ':' + PORT;          
        }
                 
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connect to MongoDB with URL: ' + url);
        return client.connect();
        
    }
}

