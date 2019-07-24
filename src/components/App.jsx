import React from 'react'

import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'
import FilterBar from '../containers/FilterBar'
import Background from '../images/wood.jpeg'
import SEO from './SEO'

const App = () => (
  <>
    <SEO />
    <main
      className="vh-100 vw-100 cover bg-center flex flex-column justify-center"
      style={{
        backgroundImage: `url(${Background})`,
        fontFamily: `'Caveat', cursive`
      }}
    >
      <div className="ph4 pv5 bg-light-yellow near-black shadow-5 br4 w-90 mw6 center">
        <h1 className="f1 tc">To do List</h1>
        <AddTodo />
        <TodoList />
        <FilterBar />
      </div>
    </main>
  </>
)

export default App
