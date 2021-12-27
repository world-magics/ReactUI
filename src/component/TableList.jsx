import React from 'react'
import TableItem from './TableItem'
import TableHeader from './TableHeader'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
const TableList = ({posts,title,remove}) => {
  if(!posts.length){
    return(
      <h6 className='text-center'>
        Not Found.
      </h6>
    )
  }
    

    return (
        <>
            <h2 className='text-center'>{title}</h2>

      <TransitionGroup>
      <TableHeader/>
        {posts.map((post,index)=>(
          
          <CSSTransition
            key={post.id}
            timeout={900}
            classNames="item">
               <TableItem remove={remove} number={index+1} post={post} />
              
            </CSSTransition>
        ))}
      </TransitionGroup>

            {/* {posts.map((post,index)=>(
         
         ))} */}
      <table className='table table-striped'>
    
        {/* <tbody > */}
          {/* <TransitionGroup>
          {posts.map((post,index)=>(
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item">
            <TableItem remove={remove} number={index+1} post={post} />
            </CSSTransition>
          ))}
          </TransitionGroup> */}
         
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
        {/* </tbody> */}
        

      </table>
        </>
    )
}

export default TableList
