import React from 'react'
import './App.css'
import TodoList from './components/todoList/todoList'

function App() {
  return (
    <div className="todo-app">
      <header>
        <h1>ToDo-List</h1>
        <TodoList />
      </header>

    </div>
  );
}

export default App;
