import React from 'react'
import TableItem from './TableItem'
import TableHeader from './TableHeader'
const TableList = ({posts,title,remove}) => {
    

    return (
        <>
            <h2 className='text-center'>{title}</h2>
      <table className='table table-striped'>
       <TableHeader/>
        <tbody >
          {posts.map((post,index)=>(
            <TableItem remove={remove} number={index+1} post={post} key={post.id}/>
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
        </>
    )
}

export default TableList
