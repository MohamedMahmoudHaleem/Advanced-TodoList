import { array, func, string } from "prop-types"

export default function TodoInput({ todos, setTodos, todo, setTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.currentTarget.elements.newTodo.value.trim()
        if (!value) {
            return
        }

        setTodos([...todos, value])
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="newTodo"
                type="text"
                placeholder="Enter todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    )
}
TodoInput.displayName = "TodoInput"
TodoInput.propTypes = {
    todos: array.isRequired,
    setTodos: func.isRequired,
    todo: string.isRequired,
    setTodo: func.isRequired,
}
