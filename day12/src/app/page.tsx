"use client"
import AtomText from "@/components/atoms/a_text";
import MoleculeFormTodo from "@/components/molecules/m_form_todo";
import OrganismsListTodo from "@/components/organisms/o_list_todo";
import { useState } from "react";

export default function Home() {
  const [listTodo, setListTodo] = useState([
    { text: "Complete online JavaScript course", checked: true },
    { text: "Jog around the park 3x", checked: false },
    { text: "10 minutes meditation", checked: false },
    { text: "Read for 1 hour", checked: false },
    { text: "Pick up groceries", checked: false },
    { text: "Complete Todo App on Frontend Mentor", checked: false },
  ])

  const handleCreateTodo = (text: string) => {
    if (!text.trim()) return
    setListTodo([...listTodo, { text, checked: false }])
  }

  const handleDeleteTodoByIdx = (idx: number) => {
    setListTodo(listTodo.filter((_,i) => i !== idx))
  }

  const handleUpdateTodoByIdx = (idx: number, checked:boolean, text:string) => {
    setListTodo(listTodo.map((item, i) => i === idx ? { ...item, text, checked } : item))
  }

  const handleToggleTodoCheckedByIdx = (idx: number) => {
    setListTodo(listTodo.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item))
  }  

  return (
    <div className="content">
      <AtomText type="title" text="todo"/>
      <br></br>
      <MoleculeFormTodo placeholder="Create a new todo…" action={handleCreateTodo}/>
      <br></br>
      <OrganismsListTodo listTodo={listTodo} handleDeleteTodo={handleDeleteTodoByIdx} handleUpdateTodo={handleUpdateTodoByIdx} handleToggleChecked={handleToggleTodoCheckedByIdx}/>
    </div>
  );
}
