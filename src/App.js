import React,{useState} from 'react';
import Counter from './component/Counter';
import InputValue from './component/InputValue';
import TableHeader from './component/TableHeader';
import TableItem from './component/TableItem';
import ToogleBtn from './component/ToogleBtn';

function App() {





  return (
    
     <React.Fragment className='app w-50 mx-auto'>
      <table className='table table-striped'>
       <TableHeader/>
        <tbody>
        {/* <TableItem title={"python"} stack={"Full-stack"}/> */}
        <TableItem post={{
          id:1,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:2,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:3,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:4,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:5,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:6,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:7,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:8,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:9,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:10,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:11,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:12,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        <TableItem post={{
          id:13,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/>
        {/* <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/> */}
        </tbody>
        

      </table>
     </React.Fragment>
   
  );
}

export default App;
