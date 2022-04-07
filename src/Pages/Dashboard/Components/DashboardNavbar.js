import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function DashboardNavbar() {
    const location = useLocation();

  return (
    <div className='border-y-1 border-border-color'>
    
            <ul className='hoc_padding list-none flex'>
                <li className='mr-3 md:mr-4 lg:mr-8'>

                    <Link
                        className={
                            "flex items-center justify-between w-full text-xs md:text-sm capitalize border-b-2  hover:border-b-2 hover:text-heading-black hover:border-primary-purple py-3 font-bold" +
                            (location.pathname === "/dashboard/analytics/teams/efficiency"
                            ? " border-b-2 border-primary-purple"
                            : " text-body-black border-transparent")
                        }
                        to="/dashboard/analytics/teams/efficiency"
                        >
                        <div className="flex items-center justify-end hover:text-heading-black">
                        
                        <p className={` hover:text-heading-black ${location.pathname === "/dashboard/analytics/teams/efficiency"
                            ? "text-heading-black font-bold"
                            : "text-body-black font-normal hover:font-bold"}`}>Efficiency</p>
                        </div>
                        
                        </Link>
                    
                </li>

                <li className='mr-3 md:mr-4 lg:mr-8'>

                    <Link
                        className={
                            "flex items-center justify-between w-full text-xs md:text-sm capitalize border-b-2 hover:text-heading-black hover:border-b-2  hover:border-primary-purple py-3 font-bold mr-1 " +
                            (location.pathname === "/dashboard/analytics/teams/volume"
                            ? " border-b-2 border-primary-purple"
                            : "text-body-black border-transparent")
                        }
                        to="/dashboard/analytics/teams/volume"
                        >
                        <div className="flex items-center justify-end hover:text-heading-black">
                        
                        <p className={`hover:text-heading-black ${location.pathname === "/dashboard/analytics/teams/volume"
                            ? "text-heading-black font-bold"
                            : "text-body-black font-normal hover:font-bold"}`}>Volume</p>
                        </div>
                        
                        </Link>
                    
                </li>


                <li className='mr-3 md:mr-4 lg:mr-8'>

                    <Link
                        className={
                            "flex items-center justify-between w-full text-xs md:text-sm capitalize border-b-2 hover:border-b-2 hover:text-heading-black hover:border-primary-purple py-3 font-bold mr-1 " +
                            (location.pathname === "/dashboard/analytics/teams/customer-satisfaction"
                            ? " border-b-2 border-primary-purple"
                            : "text-body-black border-transparent")
                        }
                        to="/dashboard/analytics/teams/customer-satisfaction"
                        >
                        <div className="flex items-center justify-end hover:text-primary-purple">
                        
                        <p className={` hover:text-heading-black ${location.pathname === "/dashboard/analytics/teams/customer-satisfaction"
                            ? "text-heading-black font-bold"
                            : "text-body-black font-normal hover:font-bold hover:text-heading-black"}`}>Customer Satisfaction</p>
                        </div>
                        
                        </Link>
                    
                </li>


                <li className='mr-3 md:mr-4 lg:mr-8'>

                    <Link
                        className={
                            "flex items-center justify-between w-full text-xs md:text-sm capitalize border-b-2  hover:border-b-2 hover:text-heading-black hover:border-primary-purple py-3 font-bold mr-1 " +
                            (location.pathname === "/dashboard/analytics/teams/backlog"
                            ? " border-b-2 border-primary-purple"
                            : "text-body-black border-transparent")
                        }
                        to="/dashboard/analytics/teams/backlog"
                        >
                        <div className="flex items-center justify-end hover:text-heading-black">
                        
                        <p className={` ${location.pathname === "/dashboard/analytics/teams/backlog"
                            ? "text-heading-black font-bold"
                            : "text-body-black font-normal hover:font-bold hover:text-heading-black"}`}>Backlog</p>
                        </div>
                        
                        </Link>
                    
                </li>


                
                
            </ul>

        
    </div>
  )
}

export default DashboardNavbar