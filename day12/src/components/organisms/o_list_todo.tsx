import React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import MoleculeTodoBox from '../molecules/m_todo_box'

interface TodoItem {
    text: string
    checked: boolean
}

interface OrganismsListTodoProps {
    listTodo: TodoItem[]
}

const OrganismsListTodo: React.FC<OrganismsListTodoProps> = ({ listTodo }) => {
    return (
        <div style={{textAlign:"center"}}>
            <div className='container'>
                {
                    listTodo.map((item, index) => <MoleculeTodoBox key={index} text={item.text} checked={item.checked} />)
                }
                <br></br>
                <div className='inline-toolbar'>
                    <AtomText type="sub-content" text="5 items left"/>
                    <div style={{display:'flex',alignItems:'center',gap:'6px',fontWeight:"bold"}}>
                        <AtomButton type='btn-no-border' text='All' extraClass="active"/>
                        <AtomButton type='btn-no-border' text='Active'/>
                        <AtomButton type='btn-no-border' text='Completed'/>
                    </div>
                    <AtomButton type='btn-no-border' text='Clear Completed'/>
                </div>
                <br></br>
            </div>
            <br></br>
            <AtomText type="sub-content" text="Drag and drop to reorder list"/>
        </div>
    )
}

export default OrganismsListTodo