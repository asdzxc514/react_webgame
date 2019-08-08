const path = require('path'); // 노드관련.. 모르면 외워라.. (경로)
const webpack = require('webpack');
module.exports = {
    name: 'number-baseball-setting', // 끝말잇기에 대한 설정
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다
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
                presets: [ 
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [ '> 1% in KR' ], // browsersList
                        },
                    }],
                    '@babel/preset-react',
                ],
                plugins: [ 
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            },
        }],
    },

    //출력
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist'
    },
};