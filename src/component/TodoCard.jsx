import { useRef } from "react"

// @TODO will be reviewed and updated in the next PR
export default function TodoCard({
    todos,
    setTodos,
    children,
    index,
    handleDelete,
    handleEdit,
}) {
    const dragTodoList = useRef(0)
    const draggedOverTodoList = useRef(0)
    function handleSort() {
        if (dragTodoList.current === draggedOverTodoList.current) return

        const updatedTodos = [...todos]
        // Swap the dragged and dragged-over items
        // const temp = updatedTodos[dragTodoList.current];
        // updatedTodos[dragTodoList.current] =
        //   updatedTodos[draggedOverTodoList.current];
        // updatedTodos[draggedOverTodoList.current] = temp;
        ;[
            updatedTodos[dragTodoList.current],
            updatedTodos[draggedOverTodoList.current],
        ] = [
            updatedTodos[draggedOverTodoList.current],
            updatedTodos[dragTodoList.current],
        ]
        setTodos(updatedTodos)

        // Reset refs after sorting
        dragTodoList.current = 0
        draggedOverTodoList.current = 0
    }
    console.log(todos)
    return (
        <>
            <li
                className="todoItem"
                draggable
                onDragStart={() => (dragTodoList.current = index)}
                onDragOver={(e) => e.preventDefault()}
                // onDragEnter={() => (draggedOverTodoList.current = index)}
                onDragEnd={handleSort}
            >
                {children}
                <div className="actionsContainer">
                    <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => handleEdit(index)}
                    ></i>
                    <button onClick={() => handleDelete(index)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        </>
    )
}
