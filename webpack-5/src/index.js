Promise.all([
  import(
    '@formatjs/intl-datetimeformat/polyfill' /* webpackChunkName: "polyfill-intl-datetimeformat" */
  ),
  import(
    '@formatjs/intl-datetimeformat/add-all-tz' /* webpackChunkName: "polyfill-intl-datetimeformat-add-all-tz" */
  ),
]).then(() => {
  console.log('Polyfills loaded');
});
