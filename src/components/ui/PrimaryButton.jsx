import React from 'react'

const PrimaryButton = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`text-sm border border-black1 text-black1 hover:text-white font-bold text-13 py-4 bg-transparent hover:bg-black1 cursor-pointer transition-all duration-300 inline-block ${className}`}>{text}</button>
  )
}

export default PrimaryButton