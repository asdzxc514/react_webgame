const React = require('react');
const { Component } = React;

class GuGuDan extends Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    };        

    onChange = (e) => {
        this.setState({ value: e.target.value });
    };

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

    input;

    onRefInput = (aaa) => { this.input = aaa; }

    render() {

        return (
            <>                    
                <div>{this.state.first} x {this.state.second} = ?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = GuGuDan;