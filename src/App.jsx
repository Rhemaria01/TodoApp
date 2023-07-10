
import { Suspense } from "react"
import Loader from "./components/Loader"
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {useModalContext} from './context/ModalContext'

function App() {
  const {open} = useModalContext()
  return (
  <>
    <main className={`@container relative flex items-center gap-10 `}>
      <div className={`${open && "blur-md"}`}>
      <Suspense fallback={<Loader />}>
        <TodoList />
      </Suspense>
      </div>
    {open &&  <TodoForm  />}
    </main>
  </>
  )
}

export default App
