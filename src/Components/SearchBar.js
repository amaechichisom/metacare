import React from 'react'
import IconFormat from '../assets/IconFormat'

function SearchBar() {
  const iconColor = "#A3A3C2";

  return (
    <div className=' search_background rounded-md flex justify-between items-center py-2 px-2 md:w-3/5'>
      <input type="text" className='text-body-search text-sm search_background w-full p-1 focus:outline-none leading-tight appearance-none' placeholder='Ask us any question'/>
      <IconFormat search color={iconColor}/>
    </div>
  )
}

export default SearchBar