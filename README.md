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

Adding new micro frontend app, update 
`module-federation.manifest.json`
`app-routing.module.ts`

Remove the automatically added micro frontend app name from remotes property
`module-federation.config.js`

