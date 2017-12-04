// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDjNDDZDRmmZ4WlxY-SGwB6U56EaVOBTYI',
    authDomain: 'spisocheck.firebaseapp.com',
    databaseURL: 'https://spisocheck.firebaseio.com',
    projectId: 'spisocheck',
    storageBucket: 'spisocheck.appspot.com',
    messagingSenderId: '953297708661'
  }
};
