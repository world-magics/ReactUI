import React from 'react'
import MyButton from './UI/button/MyButton';

const TableItem = (props) => {
    console.log(props);
    return (
     
   
       <div className='d-flex justify-content-between border     p-2 m-2'>
          <p>{props.number}</p>
          <p>{props.title}</p>
          <p>{props.stack}</p> 
          <p>{props.post.title}</p>
          <p>{props.post.stack}</p>
          <p>MERN Stack</p>
          <p>
                 <MyButton onClick={()=>props.remove(props.post)}>Удалит</MyButton>
            
          </p>
          </div>
  // <tr>
  //         
  //         </tr>
      
        
       
      
    
        
    )
}

export default TableItem
