import React, { useContext } from 'react'
import { AppContext } from '../Context'

function TodoForm() {

  const {newTodo, setNewTodo, addTodo} = useContext(AppContext)

  return (
    <>
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
    </>
    
  )
}

export default TodoForm