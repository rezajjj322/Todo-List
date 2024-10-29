import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // اضافه کردن کار جدید
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false, id: Date.now() }]);
    setNewTodo("");
  };

  // تغییر وضعیت
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ویرایش
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // ذخیره تغییرات
  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-1/2 h-auto m-4 p-3 bg-gray-400 rounded-md">
      
        <h1 className="text-white my-4 text-center">TODO List</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="type a text and press enter"
            className="w-full p-1 rounded-md"
          />
        </form>

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
      </div>
    </div>
  );
}

export default App;
