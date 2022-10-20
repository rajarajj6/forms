const Input=(props)=>{
    const{name, value,placeholder,onChange,type,className,pattern} = props
    return <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={className} pattern={pattern} required/>
}

export default Input