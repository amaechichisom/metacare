import React from 'react'
import IconFormat from '../../../assets/IconFormat';

function DashboardMenu() {
    const iconColor = "#A3A3C2";

  return (
    <div className='flex lg:flex-row flex-col justify-between items-center'>
        <h1 className='font-bold text-xl xl:text-2xl basis-2/4  lg:mb-0'>Efficiency Analytics</h1>

        <div className='flex md:flex-row flex-col items-center justify-between basis-2/4 gap-2 md:gap-4 lg:gap-6 xl:gap-8 margin-top-small-screen lg:mt-0'>
            <label htmlFor='search' className='cursor-pointer border-1 border-border-color rounded-md flex justify-between items-center py-2 px-2 basis-2/4 md:basis-1/4 lg:basis-1/4 xl:basis-7/12 '>
                <IconFormat searchSmall color={iconColor}/>
                <input id="search" type="text" className='text-body-search text-sm w-full p-1 focus:outline-none leading-tight appearance-none' placeholder='Search'/>
                
            </label>
        


            <div className=' flex justify-between items-center border-1 border-border-color p-2 rounded-md cursor-pointer'>
                <p className='text-sm text-heading-black mr-4 font-bold'>Filter Options</p>
                <IconFormat bigArrow />
            </div>
            
            <div className='text-border-border-color border-l-2 py-3 flex-none hidden lg:block'></div>

            <button className='bg-primary-green text-white rounded-md px-8 py-2 text-sm'>Export</button>

        </div>

        
    </div>
  )
}

export default DashboardMenu