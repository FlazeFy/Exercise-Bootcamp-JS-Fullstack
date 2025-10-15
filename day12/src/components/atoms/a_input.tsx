import React from 'react'

interface AtomInput {
  type: string
  placeholder?: string
  checked?: boolean
  value?: any
  classExtra?: string 
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const AtomInput: React.FC<AtomInput> = ({ type, placeholder, checked, onBlur, onKeyDown, onChange, value, classExtra }) => {
    if(type === "text"){
        return <input type={type} placeholder={placeholder} onBlur={onBlur} onKeyDown={onKeyDown} defaultValue={value} onChange={onChange} className={classExtra}/>
    } else if(type === "checkbox"){
        return (
            <div className="checkbox-wrapper" style={{padding:"10px"}}>
                <input type="checkbox" className="custom-checkbox" defaultChecked={checked} onChange={onChange}/>
                { placeholder && <span>{placeholder}</span> }
            </div>
        )
    } else {
        return <></>
    }
}

export default AtomInput