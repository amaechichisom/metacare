import React from 'react'

function SideCard() {
  return (
    <div className='grid grid-cols-4 border-1 border-border-color gap-0 rounded-lg mt-2 md:mt-4 py-1 md:py-2 p-2 overflow-hidden'>
        <div className='p-1'></div>
        <div className='cols-span-3'>
          <h3 className="text-heading-black text-sm font-bold">Metacare</h3>
          <p className='text-body-black text-xs'>adeyinka@metacare.app</p>
        </div>
    </div>
  )
}

export default SideCard