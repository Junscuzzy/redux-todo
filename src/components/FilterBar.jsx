import React from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters, CLEAR_COMPLETED } from '../actions'
import FilterLink from './FilterLink'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

const FilterBar = ({ filter, count, setVisibilityFilter, clearCompleted }) => {
  const select = action => setVisibilityFilter(action)
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-50 w-25-ns flex justify-center flex-column order-1">
        <span className="f5 lh-solid m-auto">
          {count.active && `${count.active} item left`}
        </span>
      </div>
      <div className="w-100 w-50-ns order-3 order-2-ns pv2 flex flex-wrap justify-center">
        <FilterLink
          label="All"
          action={SHOW_ALL}
          filter={filter}
          onClick={action => select(action)}
        />
        <FilterLink
          label="Active"
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
      </div>
      <div className="w-50 w-25-ns flex justify-end order-2 order-3-ns">
        <FilterLink
          label="Clear Completed"
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
