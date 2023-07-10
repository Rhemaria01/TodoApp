import {useState, createContext, useContext } from "react";
 
const ModalContext = createContext();
export const ModalProvider = ({children}) => {
    const [open,setOpen] = useState(false)
    const [form,setForm] = useState({
        title: "",
        progress: "Todo",
      })
    const updateForm = (fieldname,value) => {
        setForm({
            ...form, [fieldname.toLowerCase()]: value
        })
    }
    const updateAll = (form) => {
        setForm(form)
    }
    return(
        <ModalContext.Provider
        value={{
            open,
            setOpen,
            form,
            updateForm,
            updateAll
        }}
        >
            {children}
        </ModalContext.Provider>
    )
}
export const useModalContext = () => useContext(ModalContext);
