## ref
- 짝궁 **current**   ex)  startTime.current
- DOM에 접근할때 사용
- hooks 에서는 this의 속성들을 ref 로 표현한다

```js
const timeout = useRef(null);
const startTime = useRef();
const endTime = useRef();

if(state === 'now'){  // 반응속도 체크
	endTime.current = new Date();

	setState('waiting');
	setMessage('클릭해서 시작하세요!');
	setResult( (prevResult) => {
		return [...prevResult, endTime.current - startTime.current];
	});
	console.log(endTime.current - startTime.current + 'ms');
}
```
<br>

## createRef

```js
// 기존에 쓰던 방식
import React, { Component } from 'react';

inputRef;
onInputRef = (c) => { this.inputRef = c; };

<input type="text" ref={this.onInputRef} />


// createRef   ( class )
import React, { Component, createRef } from 'react';

inputRef = createRef();

<input type="text" ref={this.inputRef} />
```
<br>

---

<br>

- **자식 컴포넌트에서 props 는 절대 바꾸지않는다.**

	>단, 정말 필요할 경우에는 
	> - 자식 컴포넌트에서 props를 state 에 넣어준다.
	> - setState를 사용해서 바꿔준다.
	

- **class** - 자식 컴포넌트에서 props 바꿔줄 때
```js
class Try extends PureComponent {
    state = {
        result: this.props.result,
        try: this.props.try,
    };

    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>    
                <div>{tryInfo.result}</div> 
            </li>
        );
    }
}
```

- 함수로 사용할땐 = 정밀한 컨트롤이 필요할땐
	: `constructor()`, `ref()`, `setState()` 함수를 사용하여 컨트롤한다!

- **hooks** - 자식 컴포넌트에서 props 바꿔줄 때

```js
const Try = memo( ({ tryInfo }) => {  
    const [result, setResult] = useState(tryInfo.result);  //  1. state에 넣어준다

    const onClick = () => {
        setResult('1');   // 2. setState로 바꿔준다
    };

    return (
        <li>
            <div>{tryInfo.try}</div>   
            <div onClick={onClick}>{result}</div>  
        </li>
    )
} );
```


### nextContext

A -> B -> C -> D -> E -> F -> G5q

```js
shouldComponentUpdate(nextProps, nextState, nextContext){

}
```

<br>


## 조건문 if

- jsx 안에서 **if** , **for** 문을 사용하지않는다! (사용 할 순 있지만 너무 지저분해진다)
- false, undefined, num 은 jsx 에서 태그없음을 의미한다!

```js
// 1. 삼항연산자
{this.state.result.length === 0 
	? null 
	: <div>평균시간: {this.state.result.reduce((a, c) => a+c) / this.state.result.length} ms</div>
}

// 2. 부호연산자
{this.state.result.length !== 0 && <div>평균시간: {this.state.result.reduce((a, c) => a+c) / this.state.result.length} ms</div> }

```

- class 를 사용할땐 미리 구조분해로 this.state를 정의해놓아라! 
	const { state, message, result } = this.state;

- rendering 하고싶지않은 것은 따로 한번 선언하고 this를 붙여서 사용한다!

```
startTime;
this.starTime = new Date();
```


