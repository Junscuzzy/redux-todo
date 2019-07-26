import React from 'react'

import Header from '../containers/Header'
import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'
import FilterBar from '../containers/FilterBar'
import Layout from './Layout'
import SEO from './SEO'

const App = () => (
  <>
    <SEO />
    <Layout>
      <AddTodo />
      <Header title="To do things" />
      <TodoList />
      <FilterBar />
    </Layout>
  </>
)

export default App
