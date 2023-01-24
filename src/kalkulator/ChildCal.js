import React from 'react';

const ChildComponentCal =(props)=> {
    
    return ( 
    <main id="main" class="main">
    <div>
        <h1>Callculator</h1>
        <input type='number' class="form-control" onChange={event=>props.sn1(event.target.value)} />
        <input type='number' class="form-control" onChange={event=>props.sn2(event.target.value)}/>
        <p>What Operation</p>
        <div class="d-grid gap-4 d-md-block">
            <button class="btn btn-info" onClick={()=>props.onOperator('+')}>+</button>
            <button class="btn btn-info" onClick={()=>props.onOperator('-')}>-</button>
            <button class="btn btn-info" onClick={()=>props.onOperator('*')}>*</button>
            <button class="btn btn-info" onClick={()=>props.onOperator('/')}>:</button>
            <button class="btn btn-danger" onClick={()=>props.onOperator('Clear')}>C</button>
        </div>
        <h2>{props.yourAnswer}</h2>
        <h4>Checkbok</h4>
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input class="btn-check" id='+' type="checkbox" onChange={()=>props.onOperator('+')} autocomplete="off"/>
        <label class="btn btn-outline-primary" for="+" id='+'>+</label>
        
        <input class="btn-check" id='-' type="checkbox" onChange={()=>props.onOperator('-')} autocomplete="off"/>
        <label class="btn btn-outline-primary" for="-" id='-'>-</label>
        
        <input class="btn-check" id='*' type="checkbox" onChange={()=>props.onOperator('*')} autocomplete="off"/>
        <label class="btn btn-outline-primary" for="*" id='*'>*</label>
        
        <input class="btn-check" id='/' type="checkbox" onChange={()=>props.onOperator('/')} autocomplete="off"/>
        <label class="btn btn-outline-primary" for="/" id='/'>:</label>
        </div>
        <h2>{props.yourAnswer}</h2>
    </div>
    </main> );
}

export default ChildComponentCal;