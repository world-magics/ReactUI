import React,{useState} from 'react';
import BtnIncrDecr from './component/BtnIncrDecr';

function App() {


const [toogleBtn,setToggleBtn]=useState(false);
const [value,setValue]=useState('Sherzod');


  return (
    
     <React.Fragment>
       <div className="text-white app w-50 mx-auto border m-3 p-3 bg-black text-center">
<BtnIncrDecr/>
      <hr />
          <p>Value: {value}</p>
      <input 
        type="text" 
        className='form-control mt-3'
        value={value}
        onChange={event=>setValue(event.target.value)} />
         <button onClick={()=>setToggleBtn(!toogleBtn)} className="btn btn-secondary" >Toggle btn</button>
          <br />
        {toogleBtn
          ?   <p className="lead">
          Youtube Content
        </p>
          : null
        }
           
       </div>
     </React.Fragment>
   
  );
}

export default App;
