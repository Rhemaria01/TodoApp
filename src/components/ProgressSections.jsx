import React from 'react'
import AddTodo from "./AddTodo"
const ProgressSections = ({color,heading,children, index}) => {
  return (
    <div className={`${color} ${index < 1  && "rounded-l-lg"} ${index > 1 && "rounded-r-lg"} 
     h-full w-1/3 p-2 flex flex-col items-start gap-2
     drop-shadow-xl
     `}>
        <span className='flex flex-row justify-between w-full'>
        <h2 className='font-bold text-xl'>{heading}</h2>
        {index=== 0 && <AddTodo />}
        </span>
        {children}
    </div>
  )
}

export default ProgressSections