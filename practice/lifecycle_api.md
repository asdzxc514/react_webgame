## LifeCycle API

eact의 컴포너트는 생명주기(Life cycle)을 가진다. 생명주기란 컴포넌트가 생성되고 사용되고 소멸될 때 까지 일련의 과정을 말한다.
이러한 생명주기 안에서는 특정 시점에 자동으로 호출되는 메서드가 있는데, 이를 라이프 사이클 이벤트라고 한다.

<br>

> 클래스의 경우 -> constructor -> render -> ref -> componentDidMount   
> setState/prps 바뀔때 - shouldComponentUpdate -> (true) -> render -> componentDidUpdate
> 부모가 나를 없앴을 때 - componentWillUnmount -> 소멸

```js
class Test extends Component {
    state = {  };

    // 컴포넌트가 첫 렌더링 된 후, 비동기 요청을 많이함
    componentDidMount(){ 
        
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    // 리렌더링 후 
    componentDidUpdate(){ 

    }
    // 컴포넌트가 제거되기 직전 (=부모가 자식을 없앴을때), 비동기 요청 정리를 많이함
    componentDidUnmount(){ 

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




### componentWillMount()

> : 구성 요소가 탑재됩니다

- React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드
- DOM이 생성되지 않았으므로 DOM을 조작할 수 없다
- render가 호출되기 전이기 때문에 setState를 사용해도 render가 호출하지 않음

### ComponentDidMount()

> : 구성요소가 탑재됨

-  컴포넌트가 맨 처음 DOM에 redering된 후 호출되는 메소드
- setState()를 해도 이 부분은 다시 render 되지 않는다
- 현재 사용 거의 안함 / v16.3 이후부터는 `UNSAFE_componentWillMount()` 라는 이름으로 사용

> // 외부 라이브러리 연동: D3, masonry, etc  
> // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc  
> // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등

---

