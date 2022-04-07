import React from 'react'
import IconFormat from '../../../../assets/IconFormat'
import Chart from '../Chart/Chart'

function StaticCard(props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 border-border-color border-1 rounded-md mt-8 w-full'>
        
        <div className=' border-r-1 border-border-color lg:col-span-3 xl:col-span-4 p-4 '>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex justify-center  items-center'>
                    <h3 className='font-bold text-base xl:text-lg mr-3 break-all whitespace-normal'>{props.title}</h3>
                    <span className='text-primary-green bg-primary-light-green p-2 py-1 rounded-md'>+4.14%</span>
                </div>


                <div className='flex items-center justify-center gap-2 card_responsive lg:mt-0'>
                    <div className='flex items-center justify-center border-r-1 border-border-color pr-2'>
                        <span className={`${props.priorityColor} p-2 rounded`}></span>
                        <p className='ml-3 text-xs md:text-sm font-bold'>High Priority</p>
                    </div>

                    <div className='border-border-color border-1 p-2 flex justify-between items-center rounded-md'>
                        <p className='font-bold text-sm mr-8'>This Month</p>
                        <IconFormat schedule color={"#060213"}/>
                    </div>
                </div>
            </div>
            
            <div className='col-span-5 w-full h-64 mt-8 '>
                <Chart strokeColor={props.strokeColor}/>
            </div>

        </div> 

        <div className='grid md:grid-rows-2 grid-cols-3 gap-4 place-content-center place-items-center py-8'>
            <div className='flex flex-col justify-center items-start w-3/5 lg:w-4/5 h-4/5 mx-auto pl-4 padding_card col-span-3 border-border-color border-1 rounded-md bg-border-background'>
                <p className='text-sm text-body-black mb-2'>{props.cardTopTitle}</p>
                <h3 className='font-bold text-heading-black text-lg'>30 Mins</h3>
            </div>

            <div className='flex flex-col justify-center items-start w-3/5 lg:w-4/5 h-4/5 mx-auto pl-4 padding_card col-span-3 border-border-color border-1 rounded-md bg-border-background '>
                <p className='text-sm  text-body-black mb-2'>{props.cardBottomTitle}</p>
                <h3 className='font-bold text-heading-black text-lg'>1 Hour 30 Mins</h3>
            </div>

        </div>


    </div>
  )
}

export default StaticCard