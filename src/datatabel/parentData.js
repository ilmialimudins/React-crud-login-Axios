import React, { useState } from 'react';
import Showdata from './childParent';
import ReactTable from 'react-table'
const DataKaryawan=()=>{
    const dataKaryawan=[{
        emp_id:1,
        emp_fullname:'ari',
        emp_salary:12000,
        emp_department:'IT',
        sisa_cuti:20
    },{
        emp_id:2,
        emp_fullname:'dani',
        emp_salary:12000,
        emp_department:'IT',
        sisa_cuti:20
    },
    {
        emp_id:3,
        emp_fullname:'ilmi',
        emp_salary:12000,
        emp_department:'IT',
        sisa_cuti:20
    },{
        emp_id:4,
        emp_fullname:'emil',
        emp_salary:12000,
        emp_department:'IT',
        sisa_cuti:20
    },{
        emp_id:5,
        emp_fullname:'imil',
        emp_salary:12000,
        emp_department:'IT',
        sisa_cuti:20
    }
    ]
    const datacolumns = [{
        Header: 'No',
        accessor: 'no'
      },{
        Header: 'Id',
        accessor: 'emp_id'
      }, {
        Header: 'Fullname',
        accessor: 'emp_fullname'
      }, {
        Header: 'Department',
        accessor: 'emp_department'
      }, {
        Header: 'Salary',
        accessor: 'emp_salary'
      }, {
        Header: 'Sisacuti',
        accessor: 'sisa_cuti'
      }]
    const [data] = useState(dataKaryawan)
    const [columns]= useState(datacolumns)
    return ( <div>
        <Showdata
        data = {data}
        columns={columns}
        />
    </div> );
}

export default DataKaryawan;