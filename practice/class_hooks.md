## Class

- 대문자로 시작하는 것은 컴포넌트다
- 바뀌는건 뭐다? state 다
- tag 사이 {} 에는 javascript 를 사용 할 수 있다
- tag 속성으로 class="aaa"  가 아닌 `className`="aaa" 로 사용해야한다
- label 속성으로 for="bbb"  가 아닌 `htmlFor`="bbb" 로 사용해야한다
- refurn ();  여기서 ()는 아무의미없는 그룹연산자다(우선순위)  ex) return ((( )));
- 내가 만든 함수는 반드시 화살표함수로만 사용해야한다 (this가 달라짐)
```js
onSubmit = (e) => {
            e.preventDefault();
            if(parseInt(this.state.value) === this.state.first * this.state.second) {
                this.setState((prevState) => {
                    return {
                        result: prevState.value + ' 정답!',
                        first: Math.ceil(Math.random() * 9),
                        second: Math.ceil(Math.random() * 9),
                        value: '',
                    }
                    this.input.focus();
                });
            } else {
                this.setState({
                    result: '오답!',
                    value: '',
                });
                this.input.focus();
            }
        };
		
		// html
		//<form onSubmit={this.onSubmit}>
```

- 실무에서는 constructor 를 거의 안쓴다 ( this.state 가 아니고 state = {} )
```js
state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        };
```

- setState()안에 함수가 this.state 가 들어갈 경우, 
```js
this.setState((prevState) => { 
	return {
		
	} 
});
```
이렇게 함수로 감싸주고 return 해준다!  

>1. setState() 는 `비동기` 다
> 1. 이전 값 기반으로 다음값으로 바꿀때 함수로 사용한다.  
> 함수를 쓰면 이전 값을 매개변수로 접근 가능하니까 ! 

- dom에 접근하고 싶을때 ref 를 사용한다   ref={(c)=> { this.input = c; }} 

- setState 할때마다 render 함수를 실행한다

<br>

## Hooks

- setState() 나 ref 가 없는경우 함수 컴포넌트로 만들어서 사용
```js 
    const GuGuDan = () => {
        return<div>Hello, Hooks</div>;
    }
```
- Hooks 를 사용하면 함수형 컴포넌트에서도 setState(), ref 를 사용 할 수 있다
```js
const GuGuDan = () => {

        const [first, setFirst] = React.useState(Math.random() * 9));
        const [second, setSecond] = React.useState(Math.random() * 9));
        const [value, setValue] = React.useState('');
        const [result, setResult] = React.useState('');
		
        return<div>Hello, Hooks</div>;
    }
```
- 호불호가 많이 갈리지만 REACT 에서는 Hooks 사용을 더 권장한다

- state 비교

```js
// class
state = {
	first: Math.ceil(Math.random() * 9),
	second: Math.ceil(Math.random() * 9),
	value: '',
	result: '',
};

// Hooks
const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
const [value, setValue] = React.useState('');
const [result, setResult] = React.useState('');
const inputRef = React.useRef(null); // ref 사용을 위해 선언
```

- setState 비교

```js
// class
this.setState((prevState) => {
	return {
		result: prevState.value + ' 정답!',
		first: Math.ceil(Math.random() * 9),
		second: Math.ceil(Math.random() * 9),
		value: '',
	}
	this.input.focus();
});

//Hooks
setResult(prevState.value + ' 정답!'),
setFirst(Math.ceil(Math.random() * 9)),
setSecond(Math.ceil(Math.random() * 9)),
setValue('');
inputRef.current.focus();   // 위에 inputRef 선언
```

- dom에 접근하고 싶을때 this 대신 current 를 사용한다 (class에서는 this사용)










