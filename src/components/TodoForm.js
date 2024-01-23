
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../actions/todoActions'

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm
