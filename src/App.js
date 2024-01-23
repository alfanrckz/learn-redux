// src/App.js
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <div className="app">
      
      <h1>Redux Todo App</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  );
};

export default App;
