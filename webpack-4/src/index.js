Promise.all([
  // Explicitly named with webpackChunkName (should not be named by lib chunk group)
  import(
    '@formatjs/intl-datetimeformat/polyfill' /* webpackChunkName: "polyfill-intl-datetimeformat" */
  ),
  import(
    '@formatjs/intl-datetimeformat/add-all-tz' /* webpackChunkName: "polyfill-intl-datetimeformat-add-all-tz" */
  ),
  // No custom name (should be named by lib chunk group)
  import('three'),
]).then(() => {
  console.log('Polyfills loaded');
});
