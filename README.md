# Licence Application Server TS

This project is intended to test out node server with typescript with debugging support.  It is based on instructions from: https://codeburst.io/typescript-node-starter-simplified-60c7b7d99e27

Also refer to starter: https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter. It has instructions on setting up debugger.

This project serves out CDS Licence Application JSON, which can be consumed by `licence-application-web`. 

## Components and Features

This test uses the following components and features:

 * NodeJS/Express
 * TypeScript

## Install dependencies

After cloning the repo execute `npm install` to install all dependencies. 

## Run the application

* `npm run serve` -- Run server only. 
* `npm run build-ts` -- Build the code only.
* `npm run watch-ts` -- Dev auto recompile upon code change. 
* `npm run watch-node` -- Dev auto recompile and restart upon code change. 

A typical dev run is: run `npm run watch-ts` and `npm run watch-node` in parallel. 
Alternatively, run `npm run watch-ts` and start debugging in VS Code.

## Test Service 

* `npm run build-ts && npm run serve`
* GET http://localhost:3000/api/cds-applications - List all the applications
* POST http://localhost:3000/api/cds-applications - Upload a CDS application json as `applications/text` to the service. 
* GET http://localhost:3000/api/cds-applications/id - Display the CDS application JSON identified by the id.  

## Work with Docker

Docker compose is used to link mongod docker with this service. The docker-compose.yml maps mongod docker with local mongod data directory, so that there is data persistence between docker runs. Before running the mongod docker, use `sudo service mongod stop` to stop the local mongod service in Ubuntu, so the port is made available.

To run licence-application-server and MongoDB with docker-compose, follow the step:

* `sudo docker-compose up` 

To test service, go to `http://localhost:3000/api/cds-applications`

To build the server image by itself, follow the step:

* Make sure the dbClient is using docker-compose service name as the host name.
* `sudo docker build -t weifang993/licence-application-server .` 