// src/reducers/todoReducer.js
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
