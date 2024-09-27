import TodoCard from "./TodoCard.jsx"
import {array, func} from "prop-types";

export default function TodoList({
    todos,
    setTodos,
    handleDelete,
    handleEdit,
}) {
    return (
        <>
            <ul className="main">
                {todos.map((todo, todoIndex) => (
                    <TodoCard
                        todos={todos}
                        setTodos={setTodos}
                        key={todoIndex}
                        index={todoIndex}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    >
                        <p>{todo}</p>
                    </TodoCard>
                ))}

                {todos.length > 0 && (
                    <button className="reset" onClick={() => setTodos([])}>
                        Reset
                    </button>
                )}
            </ul>
        </>
    )
}
TodoList.displayName = "TodoList"
TodoList.propTypes = {
    todos: array.isRequired,
    setTodos: func.isRequired,
    handleDelete: func.isRequired,
    handleEdit: func.isRequired,
}