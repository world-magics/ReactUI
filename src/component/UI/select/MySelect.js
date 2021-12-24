import React from 'react'

function MySelect ({options,defaultValue,onChange,value}){
    return (
     
        <select
        className="form-control w-25 "
        value={value}
        onChange={e=>onChange(e.target.value)}
        >
        <option disabled value="">{defaultValue}</option>
        {options.map(opt=>(
  <option key={opt.value} 
      value={opt.value}>
      {opt.name}
  </option>
        ))}
      
     
      </select>
    );
}

export default MySelect
