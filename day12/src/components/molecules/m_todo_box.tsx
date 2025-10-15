"use client"
import React, { useState } from 'react'
import AtomButton from '../atoms/a_button'
import AtomInput from '../atoms/a_input'
import AtomText from '../atoms/a_text'

interface MoleculeTodoBox {
  checked: boolean
  text: string
  onClickDelete: () => void
  onSaveEdit?: (text: string) => void
  onToggleChecked: () => void
  isNew?: boolean
}

const MoleculeTodoBox: React.FC<MoleculeTodoBox> = ({ checked, text, onClickDelete, onSaveEdit, isNew, onToggleChecked }) => {
  const [isEditing, setIsEditing] = useState(isNew)
  const [editText, setEditText] = useState(text)

  const handleBlur = () => {
    if (editText && editText.trim() !== "" && onSaveEdit) onSaveEdit(editText.trim())
    if (!isNew) setIsEditing(false)
    if (isNew) setEditText("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleBlur()
    }
  }

  return <div className='input-group passive' style={{padding:"10px", textAlign:"start"}}>
    <AtomInput type='checkbox' checked={checked} onChange={() => onToggleChecked && onToggleChecked()}/>
    <div style={{width:"100%"}}>
      {
        isEditing ? (
          <AtomInput type="text" classExtra="border" placeholder={isNew ? "Create new todo…" : "Edit todo"} value={editText} onBlur={handleBlur} onChange={(e) => setEditText(e.target.value)} onKeyDown={handleKeyDown}/>
          ) : (
          <AtomText type="content" text={text} extraClass={checked ? "crossed" : ""}/>
        )
      }
      <div className='input-group passive' style={{border:"none", padding:"0", paddingTop:"6px"}}>
        <AtomButton type='btn-danger' text='Edit' onClick={() => setIsEditing(true)}/>
        <AtomButton type='btn-warning' text='Delete' onClick={onClickDelete}/>
      </div>
    </div>
  </div>
}

export default MoleculeTodoBox