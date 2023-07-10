import {MdAdd} from  "react-icons/md"
import { useModalContext } from "../context/ModalContext";
const AddTodo = () => {
  const {open,setOpen} = useModalContext()
  return (
          <button
          onClick={() => setOpen(!open)}
          className="bg-button font-bold  text-2xl px-1 py-1 rounded-full">
          <MdAdd/>
          </button>
  )
}

export default AddTodo