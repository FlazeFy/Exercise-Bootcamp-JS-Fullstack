import AtomText from "@/components/atoms/a_text";
import MoleculeFormTodo from "@/components/molecules/m_form_todo";
import OrganismsListTodo from "@/components/organisms/o_list_todo";

export default function Home() {
  const listTodo = [
    { text: 'Complete online JavaScript course', checked: true },
    { text: 'Jog around the park 3x', checked: false },
    { text: '10 minutes meditation', checked: false },
    { text: 'Read for 1 hour', checked: false },
    { text: 'Pick up groceries', checked: false },
    { text: 'Complete Todo App on Frontend Mentor', checked: false }
  ]

  return (
    <div className="content">
      <AtomText type="title" text="todo"/>
      <br></br>
      <MoleculeFormTodo placeholder="Create a new todo…"/>
      <br></br>
      <OrganismsListTodo listTodo={listTodo} />
    </div>
  );
}
