# DPD Server

This project serves out Drug information JSON, which can be consumed by `drug-search`. 

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
* GET http://localhost:8080/api/drugs/brand_name/allergy - List all the drugs that has `allergy` in its brand name. 

## Work with Openshift

* oc login
* npm run build-ts
* npx nodeshift --strictSSL=false --expose

