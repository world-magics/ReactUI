// import React,{useState} from 'react'

// const BtnIncrDecr = () => {
//     const [count, setCount] = useState(0);
//     const inc=()=>{
//         setCount(count+1);
//       }
//       const dec=()=>{
//         setCount(count-1);
//       }
//     return (
//         <div>
//              <h1 className='alignt-items-center text-center text-white'>Form of managment jobs</h1>
//             <h3>Count:{count}</h3>
//             <button
//             onClick={inc}
//             className='btn btn-success mx-3'>Increment</button>
//             <button className='btn btn-success mx-3' 
//             onClick={dec}
//             >Decrement</button>
       
//           <br />
         
       
       
//         </div>
//     )
// }

// export default BtnIncrDecr


import React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0

    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }
  increment(){
this.setState({count:this.state.count+1})
  }
  
  decrement(){
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <>
      <h4>Count:{this.state.count}</h4>
      <button className='btn btn-success' onClick={this.decrement}>Plus</button>
      <button className='btn btn-danger' onClick={this.increment}>Minus</button>
      </>
    )
  }
}

export default Counter;
