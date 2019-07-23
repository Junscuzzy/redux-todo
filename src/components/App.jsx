import React from 'react'
import { Helmet } from 'react-helmet'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import FilterBar from './FilterBar'
import Background from '../images/wood.jpeg'

const App = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />
    </Helmet>
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
