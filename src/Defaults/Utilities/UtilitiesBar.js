import React from 'react'
import HOC from '../../Components/HOC/HOC'
import NotificationBar from '../../Components/NotificationBar'
import SearchBar from '../../Components/SearchBar'

function UtilitiesBar() {
  return (
    <HOC>
        <div className='grid grid-cols-2 justify-between items-center md:text-blue-600'>
        
        <SearchBar/>
        <NotificationBar/>

        </div>

    </HOC>
  )
}

export default UtilitiesBar