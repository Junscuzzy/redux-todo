/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const RESET_ORDER = 'RESET_ORDER'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export const addTodo = text => ({ type: ADD_TODO, text })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })
export const resetTodoOrder = ({ oldIndex, newIndex }) => ({
  type: RESET_ORDER,
  oldIndex,
  newIndex
})
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
