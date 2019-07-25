import React from 'react'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import TodoItem from './TodoItem'

const SortableItem = SortableElement(props => <TodoItem {...props} />)

const SortableList = SortableContainer(({ items, toggleTodo, deleteTodo }) => (
  <div style={{ minHeight: '35vh' }}>
    <ul className="list pa0 bg-washed-yellow nh2">
      {items.map(({ text, id, index, ...rest }) => (
        <SortableItem
          {...rest}
          key={`item-${id}`}
          index={index}
          id={id}
          text={text}
          toggleTodo={() => toggleTodo(id)}
          deleteTodo={() => deleteTodo(id)}
        />
      ))}
    </ul>
  </div>
))

const TodoList = ({ todos, toggleTodo, deleteTodo, resetTodoOrder }) => (
  <SortableList
    items={todos}
    onSortEnd={e => resetTodoOrder(e)}
    toggleTodo={id => toggleTodo(id)}
    deleteTodo={id => deleteTodo(id)}
  />
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  resetTodoOrder: PropTypes.func.isRequired
}

export default TodoList
