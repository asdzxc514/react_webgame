const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'respons_check', // 반응속도체크 설정, 생략해도 무방
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
                plugins: [ 
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }],
    },

    //출력
    output: { 
        path: path.join(__dirname, 'dist'),  // node 문법..
        filename: 'app.js',
        publicPath: '/dist'
    },
};