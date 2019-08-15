// 모듈을 분리해서 가져올때는 필요한 파일들을 다시 적어준다
const React = require('react');
const { Component } = React;

class Lotto extends Component {
    state = {
      text: 'Hello webpack~!!',
    };

    render() {
        return (
            <h1>{this.state.text}</h1>
        );
    }
}

// 분리해온 컴포넌트를 바깥에서도 사용할 수 있게 해준다
module.exports = Lotto;