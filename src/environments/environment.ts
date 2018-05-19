// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  googleMapsApiKey: '',
  backend: 'http://localhost:4200', // Put your backend here
  firebase: {
    apiKey: 'AIzaSyDyCcYL5W5WzPreD2C-l0NX6K5zXywaAnY',
    authDomain: 'fury-a4b23.firebaseapp.com',
    databaseURL: 'https://fury-a4b23.firebaseio.com',
    projectId: 'fury-a4b23',
    storageBucket: 'fury-a4b23.appspot.com',
    messagingSenderId: '1087304786462'
  }
};
