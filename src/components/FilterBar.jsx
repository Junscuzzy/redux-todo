import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { VisibilityFilters, setVisibilityFilter } from '../actions'
import { button } from '../tachyons'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

const FilterBar = props => {
  const { filter, count } = props

  function select(action) {
    props.setVisibilityFilter(action)
  }

  return (
    <div className="flex flex-wrap justify-between">
      {filter !== SHOW_COMPLETED && (
        <button
          type="button"
          className={button}
          onClick={() => select(SHOW_COMPLETED)}
        >
          {`Show completed (${count.completed})`}
        </button>
      )}

      {filter !== SHOW_ACTIVE && (
        <button
          type="button"
          className={button}
          onClick={() => select(SHOW_ACTIVE)}
        >
          {`Show action (${count.active})`}
        </button>
      )}

      {filter !== SHOW_ALL && (
        <button
          type="button"
          className={button}
          onClick={() => select(SHOW_ALL)}
        >
          All
        </button>
      )}
    </div>
  )
}

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  count: PropTypes.objectOf(PropTypes.number).isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  filter: state.visibilityFilter,
  count: {
    all: state.todos.length,
    active: state.todos.filter(el => !el.completed).length,
    completed: state.todos.filter(el => el.completed).length
  }
})

const mapDispatchToProps = { setVisibilityFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
