import todoReducers from "../reducers/todoReducers"
import {legacy_createStore} from 'redux'

const configureStore = () => {
    const store = legacy_createStore(todoReducers)
    return store
}

export default configureStore