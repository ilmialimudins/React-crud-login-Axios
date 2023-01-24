import React from 'react';

const ChildComponent =(props)=> {
    return ( <div>
        <h1>Quiz Progaming</h1>
        <p>What progaming for build croos platform app?</p>
        <button onClick={()=>props.onQuiz('react')}>React</button>
        <button onClick={()=>props.onQuiz('phyton')}>phyton</button>
        <button onClick={()=>props.onQuiz('golang')}>golang</button>
        <h2>{props.yourAnswer}</h2>
    </div> );
}

export default ChildComponent;