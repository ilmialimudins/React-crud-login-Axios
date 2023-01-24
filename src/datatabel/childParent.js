import React,{Component} from 'react';
import DataTable from 'react-data-table-component';
// import './css/jquery.dataTable.css'

// const $ = require('jquery')
// $.DataTable = require('datatables.net')

const Showdata= (props)=> {
 
    return (
    <main id="main" class="main">
    <div>
    <table class="table">
     <thead>
       <tr>
         <th scope="col">No</th>
         <th scope="col">id</th>
         <th scope="col">fullname</th>
         <th scope="col">department</th>
         <th scope="col">salary</th>
         <th scope="col">sisacuti</th>
       </tr>
     </thead>
     <tbody>
     {props.data.map((k,i)=>
       <tr>
           <td>{i+1}</td>
           <td>{k.emp_id}</td>
           <td>{k.emp_fullname}</td>
           <td>{k.emp_department}</td>
           <td>{k.emp_salary}</td>
           <td>{k.sisa_cuti}</td>
       </tr>
     )}
   </tbody>
   </table>
    </div>
    </main> );
}

export default Showdata;

// table bostrap
{/* <div>
 <table class="table" id="table_id" >
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">id</th>
      <th scope="col">fullname</th>
      <th scope="col">department</th>
      <th scope="col">salary</th>
      <th scope="col">sisacuti</th>
    </tr>
  </thead>
  <tbody>
  {props.data.map((k,i)=>
    <tr>
        <td>{i+1}</td>
        <td>{k.emp_id}</td>
        <td>{k.emp_fullname}</td>
        <td>{k.emp_department}</td>
        <td>{k.emp_salary}</td>
        <td>{k.sisa_cuti}</td>
    </tr>
  )}
</tbody>
</table>
 </div> */}