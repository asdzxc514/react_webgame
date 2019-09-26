

## 기본 문법
```js
import React, { Component, Fragment } from 'react'; // 리액트 모듈을 불러와 사용하겠다~

class App extends Component {
  render() {
    return (
        <h1>안녕하세요 리액트</h1> 
    );
  }
}

export default App;
```


```js
import React, { Component, Fragment } from 'react'; // 리액트 모듈을 불러와 사용하겠다~

class App extends Component {
  render() {
    const name = 'hyejin !';
    const value = 1;
    return (
      <>
        <div>hello {name}</div>
        {/* 조건부 렌더링 */}
        { 1+1 === 2 ? '맞음':'틀림'} 
        { 
          (()=>{   // === (function(){
            if(value ===1) return <div>1이다!</div>
            if(value ===2) return <div>2이다!</div>
            if(value ===3) return <div>3이다!</div>
            return <div>없다</div>
          })() // 즉시호출
        }
      </>
    );
  }
}

export default App;
```

## JSX
- Javascript + XML을 합쳐서 탄생한 기존 자바스크립트의 확장 문법
- 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 한다.
- v16.2 이상부터는 불필요한 엘리먼트로 감싸지않고, Fragment라는 것으로 사용하면된다.
- 주석 : {/* 내용 */}
- 참고 : https://react-anyone.vlpt.us/03.html

## JSX style
```js
import './App.css'; // 파일을 불러올때는 이렇게 사용

class App extends Component {
  render() {
    const aaa = {
      backgroundColor: 'black',
      color: '#fff',
      padding: '10px'
    };

    return <div style={aaa}>안녕하세요!</div>;
    return <div className="bbb">안녕하세요!</div>; // css에서 불러옴
  }
}


```


## 컴포넌트(Component)를 만드는 2가지 방법
1. 클래스 (기본적)
2. 함수 

모든 컴포넌트는 render 라는 함수가 존재한다.



## Props (=변수, 중요함) , 클래스형 컴포넌트
- 읽기 전용
- state, LifeCycle 기능이 빠져있음 (뒤에서 자세히)
- 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할때 사용됨  
ex) `<Child value="value" />` 여기서 value === props

```js
import React, { Component } from 'react';

class MyName extends Component {

  static defaultProps = {  // 1번 방법 (최신방법)
    name: '기본이름'
  } 
  render() {
    return (
      <div>안녕하세요~ 제 이름은 <b>{this.props.name}</b>입니다.</div>
    )
  }
}
// 1번 결과 : 안녕하세요~ 제 이름은 기본이름입니다.

MyName.defaultProps = {  //2번 방법
  name: 'hyejin'
};
// 2번 결과 : 안녕하세요~ 제 이름은 hyejin입니다.

export default MyName;
```

## 함수형 컴포넌트
- 간단하게 값을 받아올 때 만 사용(props)
- 초기 기능이 빠름, 불필요한 기능이 없어 메모리자원을 덜 사용함

```js
import React from 'react';  // 함수형 컴포넌트는 , { Component } 생략가능

class MyName = ({ name }) => {
    return(
        <div>안녕하세요! 제 이름은 {name} 입니다.</div>
    )
};

MyName.defaulProps = {
    name: 'hyejin'
}

export default MyName;
```

비구조화 할당 문법 ([참고사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))


## State
- 읽기 전용 + 변경가능
- 내부에서 변경 할 수 있고, 변경 할 때는 언제나 `setState` 라는 함수를 사용한다

```js
class Counter extends Component {

    state = { number: 1 }

    // 화살표가 아닌 render와 같은 그냥 함수로 사용할 경우 this를 인식못함
    handleIncrease = () => {
        this.setState({  // 변화를 일으킬 때 setState 필수 사용! 
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
```

---

## Webpack이란?
파일의 종속성을 스스로 파악하여, 종속성이 있어 서로 엮여 있는 파일을 하나의 파일로 묶어주는 역할을하는 모듈번들러 이다.

`번들링(bundling)` : 각 모듈들을 묶어(패키징하여) 해당 번들만으로 구동가능한 상태로 만드는 것

```js
// webpack 설치
npm install -g webpack
```
## 장점
- 다수의 파일을 서버에 매번 요청하는 것 보다는 하나의 파일로 작업하는 것이 웹 성능에 도움이 되고 파일 관리 측면에 효율성을 가진다 한다.
- 모듈화를 통해 소스를 관리하기가 좋아지고 코드의 재사용이 용이해진다.
- 네트워크 병목현상을 해결 할 수 있습니다.
- 모듈 단위로 개발이 가능합니다.
- 코드를 압축/최적화 할 수 있습니다.
- ES6 버전 이상의 스크립트를 사용할 수 있습니다.
- LESS, SCSS를 사용할 수 있습니다.


## Webpack 구성요소 4가지
### Entry
어디에서부터 웹팩이 코드를 변환시켜야 하는지, 그 출발점(시작)을 입력하는 곳이다.

프로젝트를 구성하는 파일들을 하나의 파일로 묶을 경우, 묶는 첫 시작점이 어디일지를 정리하는 곳이다. Entry는 여러 개의 엔트리를 가질 수 있다.

```js
module.export = {
  entry: './path/to/my/entry/file.js'
  /* 여러개의 entry 선언이 가능합니다.
  entry: {
    index: './path/to/my/entry/index.js',
    file: './path/to/my/entry/file.js'
  } */
}
```

### output
컴파일된 파일의 저장할 경로를 알려준다.

대부분 "dist"라는 폴더명을 만들어 여기에 완성된 파일을 저장한다(저장된다).Entry와 달리 output은 단 한 개만 입력 할 수 있다.

### Loader
파일 꾸러미에 다양한 파일이 존재할 수 있다. 이 파일들을 처리해야하는데 웹팩은 Loader를 통해 각각의 것들을 "어떻게 관리"할 정해준다

### Plugin
해당 종류의 파일"만" 변환시키는 Loader와 달리 Plugin은 번들 된 전체 코드를 대상으로 작업한다.










## Babel
2015년에 업데이된 ES6를 사용할 때, 이전 문법인 ES5로 변환해주는 변환장치(Preprocessor)
최신버전의 크롬이나 파이어폭스는 지원하지만, 구 버전의 브라우저나 IE를 위해 변환함