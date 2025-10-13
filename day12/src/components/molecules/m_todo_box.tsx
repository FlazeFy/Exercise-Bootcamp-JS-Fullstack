import React from 'react'
import AtomInput from '../atoms/a_input'
import AtomText from '../atoms/a_text'

interface MoleculeTodoBox {
  checked: boolean
  text: string
}

const MoleculeTodoBox: React.FC<MoleculeTodoBox> = ({ checked, text }) => {
    return <div className='input-group passive' style={{padding:"10px"}}>
        <AtomInput type='checkbox' checked={checked}/>
        <AtomText type='content' text={text} extraClass={checked ? 'crossed' : ''}/>
    </div>
}

export default MoleculeTodoBox