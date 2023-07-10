import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { getUrl } from "../hooks/utils";

const StateContext = createContext();
export const StateProvider = ({children}) => {

    const fetchData =  (progress) => {
        const [data] = useFetch(getUrl(progress))
        return [data]
    }

    const addTodo = async (form) => {    
            await axios.post(getUrl(form.progress),{ 
                title: form.title, 
                progress: form.progress 
            },)
            .then((response) => {
              console.log(response);
              return response
            }, (error) => {
              console.log(error);
            });
    }

    const putData = async (form) => {
        await axios.put(getUrl(form.progress)+"/"+form.id,{
            id: form.id,
            title: form.title,
            progress: form.progress
        })
    }

    const editTodo = async (form,prevProgress) => {
        console.log('ediiting');
        
        const res = await axios.get(getUrl(prevProgress+"/"+form.id)).then((response) => {
            console.log(response.data);
            return response.data
        })
        if(res.progress === form.progress)
            putData(form)
        else  {
            deleteTodo(res)
            addTodo(form)
        }
    }

    const deleteTodo = async (form) => {
        await axios.delete(getUrl(form.progress+"/"+form.id)).then((response) => {
            return response.data
        },(error) => {
            console.error(error)
        })

    }
    return(
        <StateContext.Provider
        value={{
            fetchData,
            addTodo,
            editTodo,
            deleteTodo
        }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);