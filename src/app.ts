import express from 'express';
import { DBClient } from './dbClient';
import bodyParser from 'body-parser';
import { ObjectId, Binary } from "mongodb"

let port = 3100;
let app = express();
let router = express.Router();
var textParser = bodyParser.text()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res) {
    res.send('<h2>Welcome to the DPD Web Service. </h2> ' +
        '<p>To get drugs by brand name, call GET http://host:port/api/drugs/[name].</P>');
});

// find drug by brand name
router.get('/drugs/brand_name/:name', (req, res) => {
    let dbClient = new DBClient();
    dbClient.connect().then(client => {
        let appCol = client.db('dpd').collection('active_drugs');
        var re = new RegExp(req.params.name, 'i');
        let condition = { $regex: re };
        appCol.find({'brandName': condition }).toArray().then(drugs => {
            client.close();
            res.json(drugs);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    }).catch(err => console.log(err))
});

app.use('/api', router);
app.listen(port);
console.log('Server running at localhost:' + port);

