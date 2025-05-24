import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashboardMainContent from './DashboardMainContent'

const Dashboard = () => {
      const [searchQuery, setSearchQuery]=useState("")
  return (
      <div className="flex h-screen bg-gray-50 rounded-3xl overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default Dashboard
