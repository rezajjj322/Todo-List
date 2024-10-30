import React, { useContext } from "react";
import { AppContext } from "../Context";

function TodoItem() {
  const {
    todos,
    editingId,
    editingText,
    setEditingText,
    toggleComplete,
    deleteTodo,
    startEditing,
    saveEdit,
  } = useContext(AppContext);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="w-1/2 bg-white my-3 p-1 rounded-md"
                />
                <button
                  className="bg-green-400 text-white m-2 p-1 rounded-md"
                  onClick={() => saveEdit(todo.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  className="bg-yellow-400 text-white m-2 p-1 rounded-md"
                  onClick={() => startEditing(todo.id, todo.text)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className="bg-white m-2 p-1 rounded-md"
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? "Mark as Pending" : "Mark as Done"}
            </button>
            <button
              className="bg-red-500 text-white m-2 p-1 rounded-md"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoItem;
