
const InputField = ({label,handleFormChange,value,error,keyPress}) => {
  return (
    <div className="space-x-2">
    <label htmlFor={label} className="capitalize focus:outline-1  focus:outline-red-400 text-lg font-bold">{label+":"}</label>
    <input onKeyPress={e => keyPress(e)} type="text" value={value} id={label} className="outline-0 bg-green rounded-md p-1" onChange={(e) =>handleFormChange(label,e.target.value)} />
    <p className={`${!error && "hidden"} text-red-400 font-bold text-md`}>Todo Should not be Empty</p>
    </div>
  )
}

export default InputField