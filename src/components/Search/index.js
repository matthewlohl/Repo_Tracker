import React, { useState } from "react"
import getRepo from '../../actions/index'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

const Search = () => {

  const [ username, setUsername ] = useState('')

  // const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getRepo(username));
    console.log(username)
    console.log(setUsername)
    
  }

  const handleInput = (e) => {
    setUsername(e.target.value)
  }

  return (
    <>
    
      
        <form aria-label='form' onSubmit={handleSubmit}>
          <label htmlFor="username">Track your Repos</label>
          <input 
            aria-label='username' 
            placeholder='Type your GitHub username' 
            type="text" 
            value={ username }
            onChange={handleInput}
            required />
          {/* <input type="submit"/> */}
          <Link to={username}><input type="submit" /></Link>
        </form>
      
    
    </>  
  )
};

export default Search;
