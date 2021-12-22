import React,{useState} from 'react'

export const InputValue = () => {
    const [value,setValue]=useState('Sherzod');
    
    return (
        <div>
                 <p>Value: {value}</p>
      <input 
        type="text" 
        className='form-control mt-3'
        value={value}
        onChange={event=>setValue(event.target.value)} />
                 
      




     
        </div>
    )
}

export default InputValue;
