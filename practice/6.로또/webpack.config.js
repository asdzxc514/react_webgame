const path = require('path'); // (경로) 노드모듈시스템.. 모르면 외워라.. 상단에 스크립트 불러오는거임

module.exports = {
    name: 'word-relay-setting', // 끝말잇기에 대한 설정, 생략해도 무방
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
                plugins: [ '@babel/plugin-proposal-class-properties']
            }
        }],
    },
    //출력
    output: { 
        path: path.join(__dirname, 'dist'),  // node 문법..
        filename: 'app.js'
    },
};