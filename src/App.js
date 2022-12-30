import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
//import { useContext } from 'react'
//import { AppContext } from './Context'
//import { useGlobalContext } from './Context'
const App = () => {
  //const data=useGlobalContext()
  return (
    <>
    {/* // <div>Welcome to Topic Search </div> */}
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App