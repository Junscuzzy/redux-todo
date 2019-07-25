import React from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters, CLEAR_COMPLETED } from '../actions'
import FilterLink from './FilterLink'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

const FilterBar = ({ filter, count, setVisibilityFilter, clearCompleted }) => {
  const select = action => setVisibilityFilter(action)
  return (
    <div className="flex flex-wrap justify-between pv4">
      <div className="flex flex-column justify-center">
        <span className="f6 white b">
          {count.active > 0 ? `${count.active} left` : `All done :)`}
        </span>
      </div>
      <div className="flex flex-wrap justify-end">
        <FilterLink
          label="All"
          action={SHOW_ALL}
          filter={filter}
          onClick={action => select(action)}
        />
        <FilterLink
          label="Left"
          action={SHOW_ACTIVE}
          filter={filter}
          onClick={action => select(action)}
        />
        <FilterLink
          label="Completed"
          action={SHOW_COMPLETED}
          filter={filter}
          onClick={action => select(action)}
        />
        <FilterLink
          label="Clear"
          action={CLEAR_COMPLETED}
          filter={filter}
          onClick={() => clearCompleted()}
        />
      </div>
    </div>
  )
}

FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  count: PropTypes.objectOf(PropTypes.number).isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default FilterBar
