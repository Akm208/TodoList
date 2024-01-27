// src/redux/reducers.js
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, SET_FILTER, EDIT_TODO } from './actions';


const initialState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }],
      };
      case EDIT_TODO:
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
    ),
  };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default todoReducer;
