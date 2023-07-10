import { useState } from "react"

const Dropdown = ({label,options,handleFormChange,selected}) => { 

  return (
    <div className="space-x-2">
    <label htmlFor={label} className="capitalize text-lg font-bold">{label+":"}</label>
    <select name={label} id={label} className="capitalize outline-none bg-green rounded-md" defaultValue={selected} onChange={(e) =>handleFormChange(label,e.target.value)}>
        {options.map((option,index)=>{
            return <option value={option} key={index}  >{option}</option>
        })}
    </select>
    </div>
  )
}

export default Dropdown