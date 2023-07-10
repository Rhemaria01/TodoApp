
import Notes from "./Notes"
import { useStateContext } from "../context"


const GetNotes = ({progress}) => {    
    const {fetchData} = useStateContext();
    const [data] = fetchData(progress.progress)

    
  return (
    <ul className="flex flex-wrap gap-5">
          {
            data?.map((item,index) =>{
                return <li key={index}><Notes  data={item} index={index+1} /></li>
            })
         }
    </ul>
  )
}

export default GetNotes