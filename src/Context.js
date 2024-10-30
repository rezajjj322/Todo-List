import React, { useState } from "react"

export const AppContext = React.createContext()

const AppProvider = ({children}) => {
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
    <AppContext.Provider value={{todos, newTodo, setNewTodo, editingId, editingText, setEditingText, addTodo, toggleComplete, deleteTodo, startEditing, saveEdit}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider