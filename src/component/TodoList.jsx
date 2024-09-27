import TodoCard from "./TodoCard.jsx"

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
