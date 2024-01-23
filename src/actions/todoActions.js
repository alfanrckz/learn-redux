// src/actions/todoActions.js
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: uuidv4(), // Gunakan uuid untuk membuat ID unik
    text,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
