# Webpack `splitChunks` Name Bug

Reproduction repo for [webpack/webpack#13299](https://github.com/webpack/webpack/issues/13299)

## Reproduction Steps

1. Perform a build with Webpack 4:

```
cd webpack-4
yarn
yarn build
```

2. Observe the files in `webpack-4/dist`. There should be two polyfill files with custom names based on `webpackChunkName`:

```
dist
├── main.js
├── polyfill-intl-datetimeformat-add-all-tz.js
└── polyfill-intl-datetimeformat.js
```

3. In `webpack-4/webpack.config.js`, change `reuseExistingChunk` to `false`. This should (correctly) change the behavior such that `polyfill-intl-datetimeformat-add-all-tz` does not use its custom name:

```
dist
├── 60bc3fa2.js
├── main.js
└── polyfill-intl-datetimeformat.js
```

4. Perform a build with Webpack 5:

```
cd webpack-5
yarn
yarn build
```

5. Observe the files in `webpack-5/dist`. There should be two polyfill files, though (incorrectly, from what I can tell) only one is named with `webpackChunkName` and the other with the `lib` cache group:

```
dist
├── 60bc3fa2.js
├── main.js
├── polyfill-intl-datetimeformat.js
└── polyfill-intl-datetimeformat.js.LICENSE.txt
```

6. In `webpack-5/webpack.config.js`, change `reuseExistingChunk` to `false`. This should have no effect on the build output.
