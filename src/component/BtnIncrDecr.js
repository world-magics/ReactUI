import React,{useState} from 'react'

const BtnIncrDecr = () => {
    const [count, setCount] = useState(0);
    const inc=()=>{
        setCount(count+1);
      }
      const dec=()=>{
        setCount(count-1);
      }
    return (
        <div>
             <h1 className='alignt-items-center text-center text-white'>Form of managment jobs</h1>
            {/* <h3>Count:{count}</h3> */}
            <button
            onClick={inc}
            className='btn btn-success mx-3'>Increment</button>
            <button className='btn btn-success mx-3' 
            onClick={dec}
            >Decrement</button>
       
          <br />
         
       
        <input 
        type="text" 
        className='form-control mt-3' />
        <input 
        type="text" 
        className='form-control mt-3' />
        </div>
    )
}

export default BtnIncrDecr
