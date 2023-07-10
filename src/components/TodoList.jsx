import ProgressSections from "./ProgressSections"
import { progress } from "../data/todo"
import { Suspense } from "react"
import Loader from "./Loader"
import GetNotes from "./GetNotes"
const TodoList = () => {
  return (
    <div className="flex flex-row gap-0 container h-[48rem] aspect-video">
    
      {progress.map((item,index) => {
       return <Suspense key={index} fallback={<Loader/>}>
        <ProgressSections  heading={item.heading} color={item.color} index={index}>

          <GetNotes progress={item} progressIndex={index} />

        </ProgressSections>      
        </Suspense>
      })}

    </div>
  )
}

export default TodoList