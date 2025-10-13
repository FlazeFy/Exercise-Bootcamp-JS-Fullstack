import React from 'react'
import AtomInput from '../atoms/a_input'

interface MoleculeFormTodo {
  placeholder: string
}

const MoleculeFormTodo: React.FC<MoleculeFormTodo> = ({ placeholder }) => {
    return <div className='input-group'>
        <AtomInput type='checkbox'/>
        <AtomInput type='text' placeholder={placeholder}/>
    </div>
}

export default MoleculeFormTodo