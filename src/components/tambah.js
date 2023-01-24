import React, { useState } from 'react'

function Jumlah(){
    const [nilai1, setnilai1]= useState(0)
    const [nilai2, setnilai2]= useState(0)
    const [hasil, setHasil]= useState(0)

    let plus =()=>{
        setHasil(+nilai1 + +nilai2)
    }
  return (
    <div>
        <h1>penjumlahan</h1>
        <h3>hasil : {hasil}</h3>
        <input type='number' onChange={event=>setnilai1(event.target.value)}/>
        <input type='number' onChange={event=>setnilai2(event.target.value)}/>
        <button onClick={plus}>+</button>
    </div>
  )
}

export default Jumlah