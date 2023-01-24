//file ParentDataKaryawan.js

import React, { useState,Component } from 'react'    
// import ChildDataKaryawan from './ChildData'

const ParentDataKaryawan=()=>{
    const DataKaryawan=[
        {emp_id :'102',
        emp_fullname: 'Lex',
        emp_salary: '17000',
        emp_department: 'IT',
        emp_url :'lex.jpg'
        },
        {emp_id :'103',
        emp_fullname: 'Alexander',
        emp_salary: '9000',
        emp_department: 'IT',
        emp_url :'alexander.jpg'
        },
        {emp_id :'104',
        emp_fullname: 'Bruce',
        emp_salary: '6000',
        emp_department: 'HR',
        emp_url :'bruce.jpg'
        },
        {emp_id :'100',
        emp_fullname: 'Steven',
        emp_salary: '24000',
        emp_department: 'SALES',
        emp_url :'steven.jpg'
        },
        {emp_id :'101',
        emp_fullname: 'Neena',
        emp_salary: '17000',
        emp_department: 'SALES',
        emp_url :'neena.jpg'
        },
    
    ]
        const [data]= useState(DataKaryawan)
        return (
            <div>
                (ChildDataKaryawan data={data})
            </div>
        )
}

export default ParentDataKaryawan;

