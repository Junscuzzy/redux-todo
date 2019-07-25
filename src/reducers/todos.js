import arrayMove from 'array-move'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, RESET_ORDER } from '../actions'

const initialTodo = [
  { id: 0, text: 'Learn about Redux actions', completed: true, index: 0 },
  { id: 1, text: 'Learn about Redux reducers', completed: false, index: 1 },
  { id: 2, text: 'Learn about Redux store', completed: false, index: 2 }
]

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

export default function todos(state = initialTodo, action) {
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
