import React from 'react'
import "./searchbar.scss"
const SearchBar = ({value,searchfun}) => {
  return (
    <div className='searchBarSection'>
       <h1>Search For Recipes</h1>
       <div className='sbox'>
       <input type='text' onChange={(e)=>{searchfun(e.target.value)}}></input>
       <span><button>Search</button></span>
       </div>
       

    </div>
  )
}

export default SearchBar