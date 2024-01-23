// src/store/configureStore.js
import { legacy_createStore } from 'redux';
import counterReducer from '../reducers/CounterReducer';

const configureStore = () => {
  const store = legacy_createStore(counterReducer);
  return store;
};

export default configureStore;
