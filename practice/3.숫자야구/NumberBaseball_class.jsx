import React, { Component, createRef } from 'react';
import Try from './Try_class';


function getNumbers() { // 숫자 4개를 겹치지 않고, 랜덤으로 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i<4; i+=1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),  // ex: [1,3,5,7]
        tries: [],  // push 쓰면 안됨
    };


    onSubmitForm = (e) => {
        const { value, answer, tries} = this.state;

        e.preventDefault();
        if(value === answer.join('')) {
            this.setState((prevState) => {  // 맞췄을 때
                result: '홈런!',
                tries: [...prevState.tries, { try: value, result: '홈런!'}],
            });
            alert('홈런! 게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {  // 틀렸을 때
            const answerArray = value.split('').map( (v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9){ // 10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for(let i=0; i<4; i+=1){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    result: '',
                    tries: [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                    value: '',
                });
                this.inputRef.focus();
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        })
    };

    inputRef = createRef();

    // onInputRef = (c) => { this.inputRef = c; };

    render() {
        const { result, value, tries } = this.state;
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
    }
}

export default NumberBaseball;  // import NumberBaseball