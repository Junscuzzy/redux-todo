import arrayMove from 'array-move'
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  RESET_ORDER,
  CLEAR_COMPLETED
} from '../actions'

const initialTodo = [
  { id: 0, text: 'Learn about actions', completed: true, index: 0 },
  { id: 1, text: 'Learn about reducers', completed: false, index: 1 },
  { id: 2, text: 'Learn about Redux store', completed: false, index: 2 },
  { id: 3, text: 'Learn about React Hook', completed: false, index: 3 }
]

// Generate unique id from index
const createId = state =>
  [...state].reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1

// Sort from current index (ex: 0, 1, 4, 5)
// const sortTodos = state =>
//   [...state].sort((a, b) => (a.index > b.index ? 1 : -1))

// Reset index from 0 with increment
const resetIndex = state =>
  [...state].map((item, index) => ({ ...item, index }))

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
      return resetIndex([...state].filter(el => el.id !== action.id))

    case RESET_ORDER:
      return arrayMove(resetIndex(state), action.oldIndex, action.newIndex).map(
        (todo, index) => ({ ...todo, index })
      )

    case CLEAR_COMPLETED:
      return resetIndex([...state].filter(el => el.completed === false))

    default:
      return state
  }
}
