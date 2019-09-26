## style 적용하기

```js
npm install style-loader css-loader --save-dev
npm install sass-loader node-sass webpack --save-dev

//npm install style-loader css-loader sass-loader node-sass webpack --save-dev
```

- webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
};
```

- ㅇㅇㅇ.jsx
```js
import './style.scss';
```
