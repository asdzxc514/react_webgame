import React, { Component, PureComponent, memo } from 'react';


// class Try extends PureComponent {
//     state = {
//         result: this.props.result,
//         try: this.props.try,
//     };

//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>    
//                 <div>{tryInfo.result}</div> 
//             </li>
//         );
//     }
// }


// 자식 컴포넌트에서는 props 를 바꾸면 안된다.
// 예외, 자식 컴포넌트에서 props 를 바꿔줘야 할 경우
// const Try = memo( ({ tryInfo }) => { 
//     const [result, setResult] = useState(tryInfo.result);

//     const onClick = () => {
//         setResult('1');
//     };

//     return (
//         <li>
//             <div>{tryInfo.try}</div>   
//             <div onClick={onClick}>{result}</div>
//         </li>
//     )
// } );

    
const Try = memo( ({ tryInfo }) => {  // {tryIfo} 대신 props 로 사용가능, 하지만 보통 구조분해해서 사용한다
    return (
        <li>
            <div>{tryInfo.try}</div>   
            <div>{tryInfo.result}</div>
        </li>
    )
} );



// props를 사용할 경우,  {props.tryInfo.try} 로 변경
// props를 사용할 경우,  {props.tryInfo.result} 로 변경

export default Try; 
