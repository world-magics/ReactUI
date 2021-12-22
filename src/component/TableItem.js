import React from 'react'

const TableItem = (props) => {
    console.log(props);
    return (
     
   
       
          <tr>
            <td>{props.post.id}</td>
            {/* <td>{props.title}</td>
            <td>{props.stack}</td> */}
            <td>{props.post.title}</td>
            <td>{props.post.stack}</td>
            <td>MERN Stack</td>
            <td>
              <button className='btn btn-danger'>Удалит</button>
            </td>
          </tr>
       
      
    
        
    )
}

export default TableItem
