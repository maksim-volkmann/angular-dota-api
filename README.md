# AngularDotaApi

This is project is based on [Angular](https://angular.io/) and it's for learning purposes only. I'm using [OpenDota API](https://docs.opendota.com/). Its free and does not require an API key.

## Live version

Live version can be found <a href="https://maksim-volkmann.github.io/angular-dota-api/" target="_blank">here.</a>

## Progress
 - [x] Fetch data from the API.
 - [x] Display all heroes on the page. Name, image.
 - [x] Add search by hero name
 - [x] Add filters by main hero attribute
 - [x] Add routes
 - [x] Add single hero page
 
 Progress list is not complete. More progress tasks will be added soon.

 ## Dev

 Commands for developer.
```javascript
npm i angular-cli-ghpages --save-dev
ng build --configuration production --base-href "https://maksim-volkmann.github.io/angular-dota-api/" 
npx angular-cli-ghpages --dir=dist/angular-dota-api
```

