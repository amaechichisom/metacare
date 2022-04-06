import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Sidebar from '../Defaults/Sidebar/Sidebar'
import UtilitiesBar from '../Defaults/Utilities/UtilitiesBar'

import DashboardPage from './Dashboard/DashboardPage'
import DashboardNavbar from './Dashboard/Components/DashboardNavbar'

import HOC from '../Components/HOC/HOC'

function Dashboard() {
  return (
    <>     
            <Sidebar/>
            <div className="relative md:ml-56 xl:ml-64 ">
                
                <UtilitiesBar/>

                <DashboardNavbar/>

                <div className="mx-auto w-full mt-4 lg:mt-6 " >
                 <HOC> 
                <Routes>
                    <Route path='/Admin' exact element={<DashboardPage/>} />
                    <Route path='/knowledge-base' exact element={<DashboardPage/>} />
                    <Route path='/train-sam' exact element={<DashboardPage/>} />
                    <Route path='/agent-inbox' exact element={<DashboardPage/>} />
                    <Route path='/help-center' exact element={<DashboardPage/>} />
                    <Route path='/analytics' exact element={<DashboardPage/>} />
                    <Route path='/analytics/teams/*' exact element={<DashboardPage/>} />
                    <Route path='/analytics/teams/efficiency' exact element={<DashboardPage/>} />
                    <Route path='/analytics/teams/volume' exact element={<DashboardPage/>} />
                    <Route path='/analytics/teams/customer-satisfaction' exact element={<DashboardPage/>} />
                    <Route path='/analytics/teams/backlog' exact element={<DashboardPage/>} />
                    <Route path="*" element={<Navigate to ="/analytics/teams/efficiency" />}/>
                </Routes>
                </HOC>
                </div>

        </div>
            
        </>
  )
}

export default Dashboard