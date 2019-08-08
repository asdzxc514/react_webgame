## Webpack 설치 & 모듈 시스템

```
mkdir 폴더명

npm init

// enter ..... autor: hyejin / license: MIT/ yes

npm i react react-dom  // react, react-dom 설치

// webpack, webpack-cli  설치 , -D 는 개발할때만 쓸거야!
// 실제 서비스할때는 웹팩 필요없음
npm i -D webpack webpack-cli  

// babel 설치
npm i -D @babel/core  // 최신 문법 바꿔줌
npm i -D @babel/preset-env  // 내 환경에 맞게 바꿔줌
npm i -D @babel/preset-react  // jsx 바꿔주는것
npm i -D babel-loader // babel이랑 webpack 연결해주는것

npm i -D @babel/plugin-proposal-class-properties // class 사용하려면 추가하라고 메세지뜸

// npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties
```

- webpack.config.js  생성

```js
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
```

- WordRelay.jsx 생성해서 컴포넌트 분리

```js
// 모듈을 분리해서 가져올때는 필요한 파일들을 다시 적어준다
const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
      text: 'Hello webpack~!!',
    };

    render() {
        return (
            <h1>{this.state.text}</h1>
        );
    }
}

// 분리해온 컴포넌트를 바깥에서도 사용할 수 있게 해준다
module.exports = WordRelay;
```

- client.jsx 생성

```js
const React = require('react');
const ReactDom = require('react-dom');

// 분리한 컴포넌트 사용하기
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));
```


<br>

---

- value 와 onChange 는 세트고, value만 넣을 경우 defaultValue 로 적는다
	> defaultValue={this.state.value}

--- 


## hot-loader & webpack-dev-server
: 자동으로 변경사항을 빌드해주는 기능

1.설치

```
npm i -D react-hot-loader
npm i -D webpack-dev-server  // webpack.config.js 파일을 읽어 빌드를 해주고, 뒤쪽 서버로 유지를 시켜준다

//npm i -D react-hot-loader webpack-dev-server
```
2.명령어 바꿔주기

```
// pakage.json 

  "scripts": {
  // "dev": "webpack" 에서
    "dev": "webpack-dev-server --hot"   // -dev-server, --hot 을 붙여준다
},
```

3.react-hot-loader/root 추가, 변수로 빼주기

```js
// client.jsx

const { hot } = require('react-hot-loader/root');  // 추가

const Hot = hot(WordRelay);  // 변수 추가

ReactDom.render(<Hot />, document.querySelector('#root'));   // <Hot /> 을 변수로 빼줌
```

4.bable-loader 옵션에 플러그인 추가하기

```
// webpack.config.js

plugins: [ 
	'@babel/plugin-proposal-class-properties',
	'react-hot-loader/babel'  // 플러그인 추가
]

output: { 
        path: path.join(__dirname, 'dist'),   // (실제경로)
        filename: 'app.js',
        publicPath: '/dist'  // 추가  (가상경로)
    },
 ```
 - webpack-dev-server 를 사용하면 dist 폴더를 사용하지않는다.  
 - webpack.config.js 을 수정하면 다시 빌해줘야한다.
 
