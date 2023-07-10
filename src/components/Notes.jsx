import {useState} from "react"
import {MdEditNote, MdDelete} from "react-icons/md"
import { useModalContext } from "../context/ModalContext";
import {useStateContext} from "../context"
const Notes = ({data,index}) => {
  const {updateAll, setOpen} = useModalContext()
  const [deleteOpen,setDeleteOpen] = useState(false)
  const {deleteTodo} = useStateContext()
  const handleEdit = (e) => {
    e.preventDefault();
    updateAll({
      id: data.id,
      title: data.title,
      progress: data.progress
    })
    setOpen(true)
  }
    return (
    <div className={`bg-card py-1 px-2 flex flex-col gap-2 h-auto cursor-pointer  rounded-md items-center` }>
    <div className="flex gap-2  ">
        <h4>#{index}</h4>
        <h4 className="font-bold text-md">{data.title}</h4>
        <button onClick={()=>setDeleteOpen(!deleteOpen)} className="bg-button font-bold  text-lg px-1 py-1 rounded-full"><MdDelete /></button>
        <button onClick={(e) => handleEdit(e)} className="bg-button font-bold  text-lg px-1 py-1 rounded-full"><MdEditNote /></button>
        </div>
    {deleteOpen && <div className="flex flex-col gap-2 items-center">
      <h4>Want to delete this task?</h4>
      <button onClick={()=>{deleteTodo(data);window.location.reload(true)}} className="bg-button w-1/2  text-md rounded-full">Yes</button>
      <button onClick={()=>setDeleteOpen(!deleteOpen)} className="bg-button w-1/2   text-md  rounded-full">No</button>
    </div>}
    </div>
  )
}

export default Notes