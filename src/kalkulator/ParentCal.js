import React, {useState } from 'react';
import ChildComponentCal from './ChildCal';
const Callculator= () =>{

    const [nilai1, setnilai1]= useState(0)
    const [nilai2, setnilai2]= useState(0)

    const [hasil, setHasil]= useState(0)
    let operasi =(operation)=>{
        if(operation == '+'){
            setHasil(`${+nilai1 + +nilai2}`)
        }else if(operation == '-'){
            setHasil(`${nilai1 - nilai2}`)
        }else if(operation == '*'){
            setHasil(`${nilai1 * nilai2}`)
        }else if(operation == '/'){
            setHasil(`${nilai1 / nilai2}`)
        }else{
            setHasil(0)
        }    
    }
    return ( <div>
         <ChildComponentCal
         sn1 ={setnilai1}
         sn2={setnilai2}
         yourAnswer ={hasil}
         onOperator = {operasi}/>
        </div> );
}

export default Callculator;