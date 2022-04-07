import React from 'react'
import IconFormat from '../assets/IconFormat'

function NotificationBar() {
    const iconColor = "#696D8C";


    return (
        <div className='w-4/5 lg:w-2/5 xl:w-3/12 ml-auto'>

            <div className='grid grid-cols-2 border-border-color border rounded-md p-1 '>
                <div className='flex items-center justify-center border-r-1 border-border-color cursor-pointer'>
                    <IconFormat notifications color={"#A3A3C2"}/>
                    <p className='ml-1 px-1 text-center text-xs font-thin  rounded bg-primary-orange text-white'>3</p>
                </div>
                
                <div className='flex items-center justify-center cursor-pointer'>
                    <div className='p-3 m-1 rounded-full border-primary-purple border-1 '></div>
                    <IconFormat downNotificationsArrow color={iconColor}/>
                </div>
            </div>

        </div>
        
    )
}

export default NotificationBar