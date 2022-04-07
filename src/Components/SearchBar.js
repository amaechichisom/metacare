import React from 'react'
import IconFormat from '../assets/IconFormat'

function SearchBar() {
  const iconColor = "#A3A3C2";

  return (
    <label htmlFor="topSearch" className='cursor-pointer search_background rounded-md flex justify-between items-center py-2 px-2 md:w-3/5'>
      <input type="text" id="topSearch" className='text-body-search text-sm search_background w-full p-1 focus:outline-none leading-tight appearance-none' placeholder='Ask us any question'/>
      <IconFormat search color={iconColor}/>
    </label>
  )
}

export default SearchBar