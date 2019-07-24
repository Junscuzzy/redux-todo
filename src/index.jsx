import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './reducers'
import App from './components/App'
import './index.css'
import * as serviceWorker from './utils/serviceWorker'
import {
  addTodo
  // 	toggleTodo,
  // 	setVisibilityFilter,
  // 	VisibilityFilters,
  // 	deleteTodo
} from './actions'

// Log the state in browser console only on dev
const middlewares = []
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares))

// Dispatch some actions
store.dispatch(addTodo('Learn about Redux actions'))
store.dispatch(addTodo('Learn about Redux reducers'))
store.dispatch(addTodo('Learn about Redux store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
