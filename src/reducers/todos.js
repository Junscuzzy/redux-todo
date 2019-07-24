import uniqid from 'uniqid'

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions'

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: uniqid()
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case DELETE_TODO:
      return [...state].filter(el => el.id !== action.id)
    default:
      return state
  }
}
