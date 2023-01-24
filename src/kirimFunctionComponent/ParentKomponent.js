import React, { useState } from 'react';
import ChildComponent from './ChildKomponent';
const ParentComponent= ()=> {

    const [mesage, setAnswer]= useState("")
    const setQuiz = (quiz) =>{
        if(quiz === 'react'){
            setAnswer(`your answer ${quiz} is true`)
        }else{
            setAnswer(`your answer ${quiz} is false`)
        }
    }
    return ( <div>
        <ChildComponent
        yourAnswer ={mesage}
        onQuiz = {setQuiz}/>
    </div> );
}

export default ParentComponent;