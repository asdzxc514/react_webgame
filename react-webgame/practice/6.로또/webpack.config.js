const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다,  hidden-source-map 도 사용 가능
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    //입력
    entry: {
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [ '@babel/preset-env', '@babel/preset-react'],
                plugins: [ '@babel/plugin-proposal-class-properties'],
            },
            
        }, {
            test: /\.scss$/,
            use: [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'sass-loader', // compiles Sass to CSS, using Node Sass by default
            ],
          }], 
        
        

    },
    //출력
    output: { 
        path: path.join(__dirname, 'dist'),   // (실제경로)
        filename: 'app.js',
        publicPath: '/dist'  // 추가  (가상경로)
    },
};