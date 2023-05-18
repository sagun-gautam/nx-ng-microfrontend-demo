# NX NG Microfrontend App Demo

## To Get Started
First, install node modules
`npm install`

## Serve the application with two micro-frontend
`npx nx serve my-app --devRemotes=feature-a,feature-b`  

## Build
`nx build my-app`  

## Sync
`nx run my-app:sync`  

## Open Xcode / Android studio
`nx run my-app:open:ios`  
`nx run my-app:open:android`  

## Setup and Configurations

Adding new micro frontend app,  
`npx nx g @nrwl/angular:remote featureC --host=my-app`  

Then Update,  
`module-federation.manifest.json`  
`app-routing.module.ts`  

Remove the automatically added micro frontend app name from remotes property  
`module-federation.config.js`  

## Firebase
`firebase target:apply hosting feature-a micro-app-proto`  
`firebase target:apply hosting feature-b micro-app-2`   

After building the app, you can deploy for single or multiple app 
check config for firebase in`firebase.json` 
   
`firebase deploy`  

# Add Dynamic module federation in existing app
To add dynamic module federation to existing app, you need to use following command:  
  
`npx nx g @nrwl/angular:setup-mf my-app --mfType=host`  
  
Replace my-app with the name of the app you want to create as a host application. Then you
can add other micro apps:  
`npx nx g @nrwl/angular:remote featureXYZ --host=my-app`   

# Guide
NX Official Guide on setup.  
1. [**Recipe**](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular)
2. [**Guide - Blog Post**](https://blog.nrwl.io/setup-module-federation-in-angular-with-nx-2f3c5c074d5f)


