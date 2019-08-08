import React, { Component } from 'react';

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount 
// (setState/prps 바뀔때 -> shouldComponentUpdate -> (true) -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸




class RSP extends Component {
    state = { 
        result: '',
        imgCoord: 0,
        score: 0,
    };

    componentDidMount(){ // 컴포넌트가 첫 렌더링 된 후, 비동기 요청을 많이함
        
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return true;
    // }

    componentDidUpdate(){ // 리렌더링 후 

    }

    componentDidUnmount(){ // 컴포넌트가 제거되기 직전 (=부모가 자식을 없앴을때), 비동기 요청 정리를 많이함

    }

    render() { 
        const { result, score, imgCoord } = this.state;  // imgCoord 좌표!
        return ( 
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.js/023/182/267/1/231882267.jpg) ${imgCoord} 0`}}></div>
                <div>
                    <button id="rok" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}
 
export default RSP;




