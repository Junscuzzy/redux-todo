import { combineReducers } from 'redux'

import uniqid from 'uniqid'
import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action) {
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

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos
})

export default rootReducer
