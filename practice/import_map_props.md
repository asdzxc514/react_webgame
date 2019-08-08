## import

`require`:  Node의 모듈시스템


- exports 되는게 객체나 배열이면 구조분해가 가능하다.  ex) { hot }은 구조분해..


```js
// ecs 2015 문법
export const hello = 'hello';  // import { hello }
export const bye = 'hello';  // import { hello, bye }

export default NumberBaseball;  // import NumberBaseball
// module.exports NumberBaseball; 
```
- default 는 한번만 사용가능하고, const는 여러개 사용이 가능하다.
- module.exports 와 export default 은 다르지만 **호환**은 가능하다.

```js
// node module 문법 (common.js)

// const React = require('react');
// exports.hello = 'hello';
// module.exprts = NumberBaseball;
```

- node 문법으로 써야만 사용이 가능하지만 babel로인해 import 등이 사용이 가능하다.
- node module 시스템에서는 `odule.exports = { hello: 'a' };` 와 `exports.hello = 'a';`가 같다.

- node에서는 require 을 사용하고, react에서는 import, export를 사용한다!
- webpack.config.js 에서는 node가 실행하기 때문에 const를 사용해야한다!!

<br>

## map()
: react 에서 사용할 수 있는 반복문

- map을 사용할 땐 **key**를 넣어줘야한다 (react 가 key를 보고 같은 component 인지 구별한다)

```html
<ul>
	{[
		{ fruit: '포도', taste: '폴라포'},
		{ fruit: '딸기', taste: '베리베리스트로베리'},
		{ fruit: '수박', taste: '수박바'},
		{ fruit: '배', taste: '탱크보이'},
		{ fruit: '바나', taste: '메로나(바나나맛)'},
	].map( (v) => {
	return (
		<li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>  // 변하는 값만  {} 안에 넣는다
	);
	}) }
</ul>
```
<br>

## props
: html 에서는 attr  /  react 에서는 props 

- 대부분의 문제가 여기서 발생한다
- props 가 있으면 부모가 있는거고, 
- 증조할아버지가 손자에게 물려준다/ 고조할아버지가 손자에게 물려준다/ 손자가 고조할아버지께 받친다 등등 이럴때 문제가 많이 생기기때문에 **Context(컨텍스트) Redux(리덕스)가 사용된다** (은행역할)
- context가 좀 더 복잡하게 일을 할 수 있게 해주는것이 redux다


```js
// NumberBaseball_class.jsx

<ul>
    {this.fruits.map( (v, i) => {  // i는 index
        return (
            <Try key={v.fruit + v.taste} value={v} index={i} />
        );
    }) }
</ul>
```

```js
// Try_class.jsx

import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b> - {this.props.index}  //props
                <div>컨텐츠1</div>                            
                <div>컨텐츠2</div>                            
                <div>컨텐츠3</div>                            
                <div>컨텐츠4</div>                            
            </li>
        )  
    }
}

export default Try;
```
