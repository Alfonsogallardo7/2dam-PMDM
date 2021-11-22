// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.themoviedb.org/3',
  apiKey: 'd64edfd74101230753aa7b2393ffe8df', // Debo introducir mi API KEY de desarrollador que he obtenido en la web de TheMovieDB API.
  defaultLang: 'es-ES',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
  session_id: '74201b53f8807576ae14bbfc9016f2c3bacf35cd'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
