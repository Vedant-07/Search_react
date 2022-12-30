import React from 'react'
import { useGlobalContext } from './Context'
//import { useGlobalContext } from './Context'
const Search = () => {
   const {query,searchPost}=useGlobalContext()
  return (
    <>
    <h1> Topic Search </h1>
    <form >
      <div>
        <input type="text" placeholder='Search ....... '
        value={query}
        onChange={(e)=>{
          searchPost(e.target.value)
        }}
        />
      </div>
    </form>
    </>
  )
}
//onSubmit={(e)=>e.preventDefault()
export default Search