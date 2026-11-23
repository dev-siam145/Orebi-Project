import React from 'react'

const Input = ({name,id,value,placeholder,type,className,onChange}) => {
  return (
    <input className={`${className}`} type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input