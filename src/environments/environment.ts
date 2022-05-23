// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceURL: 'http://13.233.207.91:1608/',
  login: 'api/v1/login',
  inserttask: 'api/v1/inserttask',
  gettaskdetails: 'api/v1/gettaskdetails',
  updatetaskdetails: 'api/v1/updatetaskdetails',
  getuserdetails: 'api/v1/getuserdetails',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
