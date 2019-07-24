import React from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters } from '../actions'
import { button } from '../utils/tachyons'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

const FilterBar = ({ filter, count, setVisibilityFilter }) => {
  const select = action => setVisibilityFilter(action)
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

export default FilterBar
