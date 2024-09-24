import { useCallback, useState, useRef } from "react";
import TodoCard from "./TodoCard.jsx";

export default function TodoList({
  todos,
  setTodos,
  flag,
  setflag,
  handleDelete,
  handleEdit,
}) {
 

  function handleRest() {
    setTodos([]);
    setflag(false);
  }

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

        {flag && (
          <button className="reset" onClick={handleRest}>
            Reset
          </button>
        )}
      </ul>
    </>
  );
}
