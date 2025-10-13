import React from 'react'

interface AtomInput {
  type: string
  placeholder?: string
  checked?: boolean
}

const AtomInput: React.FC<AtomInput> = ({ type, placeholder, checked }) => {
    if(type === "text"){
        return <input type={type} placeholder={placeholder}/>
    } else if(type === "checkbox"){
        return (
            <div className="checkbox-wrapper" style={{padding:"10px"}}>
                <input type="checkbox" className="custom-checkbox" defaultChecked={checked}/>
                { placeholder && <span>{placeholder}</span> }
            </div>
        )
    } else {
        return <></>
    }
}

export default AtomInput