import React from 'react'
import MediaQuery from 'react-responsive'

import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'
import FilterBar from '../containers/FilterBar'
import SEO from './SEO'

const App = () => (
  <>
    <SEO />
    <MediaQuery minDeviceWidth="30em">
      {matches => (
        <main
          className={`vh-100 vw-100 flex flex-column justify-center ${!matches &&
            `c-bg-pink`}`}
        >
          <div
            className={`ph3 ph4-ns pt3 w-90 center ${
              matches ? `br4 shadow-5 mw6 pa2 c-bg-pink ` : ``
            }`}
          >
            <AddTodo />
            <h1 className="f3 ttu tr c-red">To do things</h1>
            <TodoList />
            <FilterBar />
          </div>
        </main>
      )}
    </MediaQuery>
  </>
)

export default App
