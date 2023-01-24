import React, { useState } from 'react';
import KirimnamaChild from './kirimdatanamaChild';
const KirimNama = (props)=> {
    const[data, setFname]= useState({
         fname:'keanu',
         lastname:'Reaves'
    })

    return ( <div>
        <KirimnamaChild data={data}/>
    </div> );
}

export default KirimNama;