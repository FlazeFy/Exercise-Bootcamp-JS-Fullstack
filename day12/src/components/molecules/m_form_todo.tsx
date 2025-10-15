import React from 'react'
import AtomInput from '../atoms/a_input'

interface MoleculeFormTodo {
  placeholder: string
  action: (text: string) => void
}

const MoleculeFormTodo: React.FC<MoleculeFormTodo> = ({ placeholder, action }) => {
  const emptyField = (e: any) => {
    e.target.value = "" 
    e.preventDefault()
  }
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()
    if (text) {
      action(text)
      emptyField(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      action(e.currentTarget.value)
      emptyField(e)
    }
  }

  return <div className='input-group'>
    <AtomInput type='checkbox'/>
    <AtomInput type='text' placeholder={placeholder} onBlur={handleBlur} onKeyDown={handleKeyDown}/>
  </div>
}

export default MoleculeFormTodo