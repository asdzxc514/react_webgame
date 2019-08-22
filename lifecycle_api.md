## LifeCycle API (class)

eact의 컴포너트는 생명주기(Life cycle)을 가진다. 생명주기란 컴포넌트가 생성되고 사용되고 소멸될 때 까지 일련의 과정을 말한다.
이러한 생명주기 안에서는 특정 시점에 자동으로 호출되는 메서드가 있는데, 이를 라이프 사이클 이벤트라고 한다.

<br>

> 클래스의 경우 -> constructor -> render -> ref -> componentDidMount   
> setState/props 바뀔때 - shouldComponentUpdate -> (true) -> render -> componentDidUpdate
> 부모가 나를 없앴을 때 - componentWillUnmount -> 소멸

```js
class Test extends Component {
    state = {  };

    // 컴포넌트가 첫 렌더링 된 후, 비동기 요청을 많이함
    componentDidMount(){ 
        
    }

    //  props 또는 state가 변경되었을 때, 재랜더링 여부를 return 값으로 결정함 , 컴포넌트 업데이트 직전에 호출
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    // 리렌더링 후 
    componentDidUpdate(){ 

    }
    // 컴포넌트가 제거되기 직전 (=부모가 자식을 없앴을때), 비동기 요청 정리를 많이함
    componentWillUnmount(){ 

    }


    render() { 
        return (  );
    }
}
 
export default Test;
```

<br><br>

### shouldComponentUpdate(nextProps, nextState, nextContext)

> : 구성요소를 업데이트해야 합니까?

- 컴포넌트 업데이트 직전에 호출되는 메소드
- props 또는 state가 변경되었을 때, **재랜더링 여부**를 return 값으로 결정함


### ComponentDidMount()

> : 구성요소가 탑재됨

-  컴포넌트가 맨 처음 DOM에 rendering된 후 호출되는 메소드
- setState()를 해도 이 부분은 다시 render 되지 않는다


> // 외부 라이브러리 연동: D3, masonry, etc  
> // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc  
> // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등



### componentWillMount()

> : 구성 요소가 탑재됩니다

- React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드
- DOM이 생성되지 않았으므로 DOM을 조작할 수 없다
- render가 호출되기 전이기 때문에 setState를 사용해도 render가 호출하지 않음
- 현재 사용 거의 안함 / v16.3 이후부터는 `UNSAFE_componentWillMount()` 라는 이름으로 사용

---





<br>



## LifeCycle API (hooks)

- useEffect 는 여러번 사용이 가능하다 (다른 효과를 주고싶을 때)
- [ ] 안에 여러게 사용도 가능하다 ex) [imgCoord, result, score]
- 배열에는 꼭 useEfect를 다시 실행할 값만 넣기!


```js
// componentDidMount, componentDidUpdate (1대1 대응은 아님)
useEffect( () => {
    interval.current = setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할
        clearInterval(interval.current);
    }
}, [imgCoord]);  
//  [] 안에 아무것도 적지않으면 처음 한번만 실행하고 실행하지않겠따! 
// [] 안에 값이 바뀔때마다 실행됨!
```


<br>

---

<br>

```js
// class
componentDIdMount() {
    this.setState({
        imgCoord: 3,
        score: 1,
        result: 2,
    })
}

// hooks
userEffect( () => {
    setImgCoord();
    setScore();
}, [imgCoord, score]);

userEffect( () => {
    setResult();
}, [result]);
```