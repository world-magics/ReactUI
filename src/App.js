import React,{useState} from 'react';
import Counter from './component/Counter';
import InputValue from './component/InputValue';
import TableHeader from './component/TableHeader';
import TableItem from './component/TableItem';
import ToogleBtn from './component/ToogleBtn';

function App() {



const [posts,setPosts]=useState([
  {id:1,title:'Javascript',stack:"MERN Stack"},
  {id:2,title:'Java',stack:"Spring"},
  {id:3,title:'Python',stack:"Cyber"},
  {id:4,title:'Php',stack:"MERN Stack"},
  {id:5,title:'Django',stack:"Backend"},
  {id:6,title:'Spring',stack:"MERN Goolang"},
])
//Massiv(Array bilan shunaqa yuboriladi)
  return (
    
     <React.Fragment className='app w-50 mx-auto'>
      <table className='table table-striped'>
       <TableHeader/>
        <tbody >
          {posts.map(post=>(
            <TableItem post={post}/>
          ))}
        {/* <TableItem title={"python"} stack={"Full-stack"}/> */}
        {/* <TableItem post={{
          id:1,
          title:"Java",
          stack:"Spring,MVC, Architecture"}}/> */}
      
        {/* <TableItem/>
        <TableI tem/>
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
