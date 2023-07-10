import { useState } from "react";
import { useModalContext } from "../context/ModalContext"
import InputField from "./InputField";
import {progress} from "../data/todo"
import Dropdown from "./Dropdown";
import { useStateContext } from "../context";
import {MdClose} from "react-icons/md"
const TodoForm = () => {
  const {form,updateForm,setOpen} = useModalContext();
  const {addTodo,editTodo} = useStateContext();
  const [error,setError] = useState(false)
  const [prevProgress] = useState(form.progress)
  const handleFormChange = (formField, value) => {
    updateForm(formField,value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.title === "") {
      setError(true)
    } else {
      setError(false)
      form.id !== undefined ? await editTodo(form,prevProgress): await addTodo(form)
      setOpen(false)
      window.location.reload(true)
    }
  }
  const progressOptions = progress.map((item) => item.heading)
  const handleKeyPress = async (event) => {
    if(event.key === 'Enter'){
      form.id !== undefined ? await editTodo(form,prevProgress): await addTodo(form)
      window.location.reload(true)
    }
    else return
  }

  return (  
      <div className="absolute top-0 z-50 h-full w-full flex justify-center items-center">
        <form className={`shadow-md bg-card rounded-md 
        p-5 w-96 flex flex-col gap-5 justify-center items-start`}>
            <span className="w-full flex justify-between">
            <h2 className="font-extrabold text-2xl">Todos</h2>
             <button onClick={() => setOpen(false)} className="cursor-pointer bg-button font-bold  px-2 py-2 text-lg rounded-full"> <MdClose/></button> 
             </span>
            <InputField label={"title"} handleFormChange={handleFormChange} value={form.title} error={error} keyPress={handleKeyPress}/>
            <Dropdown label={"Progress"} options={progressOptions} handleFormChange={handleFormChange} selected={form.progress}/>
            <button 
            onClick={ (e) => handleSubmit(e)} 
            className={`rounded-full py-2 font-bold w-1/2 bg-button `}> 
            {form.id !== undefined ? "Edit" : "Add"}
            </button>
        </form>
      </div>
  )
}

export default TodoForm