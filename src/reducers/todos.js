import { arrayMove } from 'react-sortable-hoc'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, RESET_ORDER } from '../actions'

// Generate unique id from index
function createId(state) {
  return state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
}

const addTodoItem = (state, action) => ({
  id: createId(state),
  text: action.text,
  completed: false,
  index: createId(state)
})

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [addTodoItem(state, action), ...state]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case DELETE_TODO:
      return [...state].filter(el => el.id !== action.id)
    case RESET_ORDER:
      return arrayMove(state, action.oldIndex, action.newIndex).map(
        (todo, index) => ({ ...todo, index })
      )
    default:
      return state
  }
}
