- 함수 안에서 this를 사용하지 않을 경우 class 바깥으로 빼준다. 
	(class -> hooks 로 변경시 영향을 받지않아 좋다)
	

- react 에서는 배열에 **push()** 를 사용하면 안된다
- [...arr, 1] 이런식으로 사용해야한다

```
const arr = [];
arr.push(1);
arr === arr   // true


const arr1 = [];
const arr2 = [...arr1, 1];
arr1 === arr2  // false
```

- 옛날 state 를 가지고 현재  state를 만들 경우
	this.setState( **(prevState) => { }** );  **prevState 함수를 사용해준다**
	
	
```js
// class - prevState 사용전
this.setState(()=> {
    tries: [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
});

// class - prevState 사용후
this.setState((prevState)=> {
    return {  // 리턴!!!!
        tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
    };    
});

// hooks - prevState 사용후
setTries( (prevTries) => {
	return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]
});
```

<br>

- this.state 의 반복은 구조분해로 줄일 수 있다.  (비구조화할당)

```js
return (
    <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
            <input type="text" ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
            {this.state.tries.map( (v, i) => {  // i는 index
                return (
                    <Try key={`${i+1}차 시도: `} tryInfo={v} />
                );
            }) }
        </ul>
    </>
);


const { result, value, tries } = this.state;  // 구조분해  (비구조화할당)

return (
    <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
            <input type="text" ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
            {tries.map( (v, i) => {  // i는 index
                return (
                    <Try key={`${i+1}차 시도: `} tryInfo={v} />
                );
            }) }
        </ul>
    </>
);
```
<br>

`map()`  함수형 프로그래밍의 핵심, 1대1로 짝짓는것
> 입력과 출력이 똑같아야하기 때문에 map 안에서는 없애지 못한다 ( filter() 사용해야함 )
> [1, 2, 3] 을 [2, 4, 6]으로 바꿀때  ->  [1,2,3].**map( (v) => v*2 )**


<br><br>

## Rendering 최적화

#### 문제
무조건 화면을 다시 그린다.  (setState 에 아무값을 지정해주지않아도! 렌더링!)

#### 확인방법 
	F12 -> React(확장프로그램) -> 톱니바퀴(설정) -> Highlight Updates 체크하기 -> close
	> 렌더링 되는부분이 반짝이면서 색상표시 , 빨간색 = 안좋음

<br>

#### 개선방법1 (class)
[`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) : nextState와 nextProps를 매개변수로 받아서 화면을 다시 그릴지 말지를 결정한다. 따로 구현하지 않았다면 무조건 화면을 다시 그린다.  

```
// RenderTest.jsx

import React, { Component } from 'react';

class Test extends Component {
    state = {
        counter: 0,
    }
	
	// 얘가 필요해!!
    shouldComponentUpdate(nextProps, nextState, nextContext) {  
        if(this.state.counter !== nextState.counter){
            return true;
        }
        return false;
    }

    onClick = () => {
      this.setState({})  ;
    };

    render(){
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test; 
```

<br>

#### 개선방법2 (class)
`PureComponent` 
- 컴포넌트를 잘게 쪼개서 PureComponet 로 사용하는게 좋다
- {a: 1} 에서 setState {a: 1}을 할 때 새로 렌더링하므로 state에 객체, 배열 구조를 안쓰는게 좋다.
- 복잡한 구조에서는 비추비추

```js
import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
    }
    onClick = () => {
      this.setState({})  ;
    };

    render(){
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test; 
```
<br>

#### 개선방법3 (hooks..)
`memo()`

- 자식들이 모두 PureComponent다 라고 하면, 부모에도 PureComponent랑 memo() 를 적용할 수 있다.

```js
import React, { memo } from 'react';  // memo!!!
    
const Try = memo( ({ tryInfo }) => {  // memo() 로 감싸준다!!
    return (
        <li>
            <div>{tryInfo.try}</div>   
            <div>{tryInfo.result}</div>
        </li>
    )
} );
```

<br><br>


**shouldComponentUpdate)()를 사용할 땐 Component**  
**PureComponent 를 사용할땐 memo()**  
  
이 조합으로 사용하면 최적화 **GOOD**!!! 나중에 엄청난 차이!!




