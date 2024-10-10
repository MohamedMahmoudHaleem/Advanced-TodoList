import { useState } from "react"
import TodoInput from "./component/TodoInput.jsx"
import TodoList from "./component/TodoList.jsx"

export default function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index))
    }
    function handleEdit(index) {
        setTodo(todos[index])
        handleDelete(index)
    }

    return (
        <>
            <TodoInput
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                setTodo={setTodo}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    )
}
