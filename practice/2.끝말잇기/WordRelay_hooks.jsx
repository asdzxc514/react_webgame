const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('끝말잇기');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if( word[word.length - 1] === value[0] ){
            setResult('정답'),
            setWord(value),
            setValue(''),
            inputRef.current.focus();
        } else {
            setResult('오답'),
            setValue(''),
            inputRef.current.focus();
        }
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">?</label>
                <input type="text" ref={inputRef} value={value} onChange={onChange} className="wordInput" />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;