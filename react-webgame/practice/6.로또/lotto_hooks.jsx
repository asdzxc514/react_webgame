// 모듈을 분리해서 가져올때는 필요한 파일들을 다시 적어준다
import React, { useState, useRef, useEffect } from 'react';
import Ball from './Ball';
import './style.scss';

function getWinNumbers() {
    console.log('getWinNumbers, 반복중?');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}


const Lotto = ()=> {

    const [winNumbers, setWinNumbers] = useState(getWinNumbers()); // 당첨 숫자들
    const [winBalls, setWinBalls] = useState([]);  // 앞에 6개
    const [bonus, setBonus] = useState(null);  // 보너스 공
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);


    // runTimeouts = () => {
	// 	console.log('함수: runTimeouts');
	// 	for(let i=0; i < winNumbers.length - 1; i++){
    //         timeouts[i] = setTimeout( () => {
    //             setWinBalls( (prevState) => { [...prevState.winBalls, winNumbers[i]] } );
    //         }, (i + 1) * 1000);             
    //     }
    //     timeouts[6] = setTimeout( () => {
    //         setBonus(winNumbers[6]);
    //         setRedo(true);
    //     }, 7000);
    // };


    useEffect( ()=> {
        console.log('useEffect');
		for(let i=0; i < winNumbers.length - 1; i++){
            timeouts.current[i] = setTimeout( () => {
                setWinBalls( (prevState) => [...prevState.winBalls, winNumbers[i]] );
            }, (i + 1) * 1000);             
        }
        timeouts.current[6] = setTimeout( () => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);

        // componentWillUnmount  (= return)
        return () => {
            timeouts.current.forEach( (v) => {
                clearTimeout(v);
            });
        }; 
    }, []);     
    
    // [] 이 비어있으면 componentDidMount랑 동일함
    // 배열에 요소가 있으면 componentDidMount, componentDidUpdate 둘 다 수행
    







    onClickRedo = () => {
        console.log('============ 함수: 버튼 onClickRedo');
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
		timeouts.current = [];
	};


    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
            {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
        </>
    );
};




class Lotto extends Component {

	// 컴포넌트가 첫 렌더링 된 후, 비동기 요청을 많이함
	componentDidMount() {
		console.log('did mount');
		this.runTimeouts();
    }

	// 리렌더링 후 
	componentDidUpdate(prevProps, prevState){
		console.log('did updatd');
		if (this.state.winBalls.length === 0){
			this.runTimeouts();
		}
	}

	// 컴포넌트가 제거되기 직전 (=부모가 자식을 없앴을때), 비동기 요청 정리를 많이함
    componentWillUnmount() {
		console.log('will unmount');
        this.timeouts.forEach( (v) => {
            clearTimeout(v);
        });
    }


	onClickRedo = () => {
		console.log('============ 함수: 버튼 onClickRedo');
		this.setState( {
			winNumbers: getWinNumbers(), // 당첨 숫자들
			winBalls: [], // 앞에 6개
			bonus: null, // 보너스 공
			redo: false,
		});
		this.timeouts = [];
	};

}
 
export default Lotto;
