import React from 'react'

import DashboardMenu from "./Components/DashboardMenu"

import StaticCard from './Components/Card/StaticCard'


function DashboardPage() {
  const colors = {
    "primary-orange": "#F05D23",
    "primary-pink": "#FB6491",
    "primary-teal": "#07C9E2",
    "primary-blue": "#3E68FF",
  }

  return (
    <div>
      <DashboardMenu/>

      <StaticCard title="Average response Time" cardTopTitle="Response Time" cardBottomTitle="Response Time" strokeColor={colors['primary-orange']} priorityColor={`bg-primary-orange`}/>
      <StaticCard title="Replies per resolution" cardTopTitle="Average Replies" cardBottomTitle="Response Time"  strokeColor={colors['primary-blue']} priorityColor={`bg-primary-blue`}/>
      <StaticCard title="Average response Time" cardTopTitle="Average Resolution Rate" cardBottomTitle="Response Time"  strokeColor={colors['primary-pink']} priorityColor={`bg-primary-pink`}/>
      <StaticCard title="First contact resolution rate" cardTopTitle="Average Contact Rate" cardBottomTitle="Response Time"  strokeColor={colors['primary-teal']} priorityColor={`bg-primary-teal`}/>
    </div>
  )
}

export default DashboardPage