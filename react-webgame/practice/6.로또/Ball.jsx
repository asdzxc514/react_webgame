import React from 'react';


// hooks가 아닌 그냥 함수 컴포넌트
// hooks 는 inport 에 useState, useEffect 가 들어가야함!
// PureComponent 를 사용하고 싶으면 memo 로 감싸주기!

// memo 를 감싸면 (함수를 함수로 감쌈)  === 하이오더컴포넌트(HOC), 고차컴포넌트


const Ball = React.memo(({ number }) => {
    let background;
    if (number <= 10) {
        background = 'pink';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background = 'yellow';
    } else if (number <= 40) {
        background = 'skyblue';
    } else {
        background = 'green';
    }

    return (
        <div className="ball" style={{ background }}>{number}</div>
    );
});

export default Ball;