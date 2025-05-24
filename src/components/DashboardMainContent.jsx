import { ChevronLeft, ChevronRight } from "lucide-react"

import AnatomySection from "./AnatomySection"

import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import CalendarView from "./CalendarView"


export default function DashboardMainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-md bg-white shadow-sm">
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 rounded-md bg-white shadow-sm">
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnatomySection />
        <CalendarView/>
        

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </main>
  )
}
