# DPD Server

This project serves out Drug information JSON, which can be consumed by `drug-search`. 
Reference: https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/

## Components and Features

This test uses the following components and features:

 * NodeJS/Express
 * TypeScript

## Install dependencies

After cloning the repo execute `npm install` to install all dependencies. 

## Run the application

* `npm run serve` -- Run server only. 
* `npm run build` -- Build the code only.
* `npm run watch-node` -- Dev auto recompile and restart upon code change. 

A typical dev run is: run `npm run watch-ts` and `npm run watch-node` in parallel. 
Alternatively, run `npm run watch-ts` and start debugging in VS Code.

## Test Service 

* `npm run build && npm run serve`
* GET http://localhost:3000/api/drugs/brand_name/allergy - List all the drugs that has `allergy` in its brand name. 

## Docker 

* To build docker image: `[sudo] docker build -t dpd-node-server .`
* If you have mongodb running on localhost, you can run docker image 'dpd-node-server' to connect to mongodb instance: `[sudo] docker run -it -p 3000:3000 -e MONGODB_SERVICE_HOST=localhost -e MONGODB_SERVICE_PORT=27017 --rm dpd-node-server`
* If you have mongodb running in docker as 'mongo', then you can run docker image 'dpd-node-server' to connect to mongo instance: `[sudo] docker run -it -p 3000:3000 -e MONGODB_SERVICE_HOST=mongo -e MONGODB_SERVICE_PORT=27017 --rm dpd-node-server`. Note the MONGODB_SERVICE_HOST environment value change.