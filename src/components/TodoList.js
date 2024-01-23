// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/todoActions';
import './TodoList.css'; // Import file CSS untuk gaya khusus

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? 'completed' : ''} // Menetapkan kelas 'completed' jika tugas sudah selesai
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
