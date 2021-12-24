import React from 'react'
import MyButton from './UI/button/MyButton';

const TableItem = (props) => {
    console.log(props);
    return (
     
   
       
          <tr>
            <td>{props.number}</td>
            {/* <td>{props.title}</td>
            <td>{props.stack}</td> */}
            <td>{props.post.title}</td>
            <td>{props.post.stack}</td>
            <td>MERN Stack</td>
            <td>
                <MyButton onClick={()=>props.remove(props.post)}>Удалит</MyButton>
              {/* <button className='btn btn-danger w-50  my-2'>Удалит</button> */}
              {/* <button className='btn btn-danger w-50 my-2'>Изменит</button> */}
            </td>
          </tr>
       
      
    
        
    )
}

export default TableItem
