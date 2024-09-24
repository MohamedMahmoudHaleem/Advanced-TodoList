import { useState } from "react";
import TodoInput from "./component/TodoInput.jsx";
import TodoList from "./component/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [flag, setflag] = useState(false);

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
    setflag(false);
  }
  function handleEdit(index) {
    let oldValueToEdit = todos[index];
    setTask(oldValueToEdit);
    handleDelete(index);
  }

  return (
    <>
      <TodoInput
        todos={todos}
        setTodos={setTodos}
        task={task}
        setTask={setTask}
        flag={flag}
        setflag={setflag}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        flag={flag}
        setflag={setflag}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}
