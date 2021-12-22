import React,{useState} from 'react'

function ToogleBtn() {
    
const [toogleBtn,setToggleBtn]=useState(false);
    return (
        <div>
             <button onClick={()=>setToggleBtn(!toogleBtn)} className="btn btn-secondary" >Toggle btn</button>
          <br />
        {toogleBtn
          ?   <p className="lead">
          Youtube Content
        </p>
          : null
        }
        </div>
    )
}

export default ToogleBtn
