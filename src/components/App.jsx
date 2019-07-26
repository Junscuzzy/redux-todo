import React from 'react'
import MediaQuery from 'react-responsive'

import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'
import FilterBar from '../containers/FilterBar'
import SEO from './SEO'

const App = () => (
  <>
    <SEO />
    <MediaQuery minWidth="30em">
      {matches => (
        <main
          className={`min-vh-100 flex justify-center items-center pa4-ns ${!matches &&
            `c-bg-pink`}`}
        >
          <div
            id="App"
            className={`ph3 ph4-ns pv3 w-100 ${matches &&
              `br3 c-shadow mw6 pa2 c-bg-pink`}`}
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
