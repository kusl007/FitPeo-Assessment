import { Search } from "lucide-react"
import { healthData } from "../data/health-data"
import HealthStatusCard from "./HealthStatusCard"
// import HealthStatusCard from "@/components/health-status-card"

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-xl p-6 relative">
      <div className="absolute top-6 right-6">
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      <div className="flex items-center justify-center relative h-[290px]">
        <div className="relative">
          <img src="./muscular-system.jpg" alt="Human anatomy" className="h-[300px] object-contain" />

          {/* Health indicators */}
          <div className="absolute top-[60px] left-[110px]">
            <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              <span>Healthy Heart</span>
            </div>
          </div>

          <div className="absolute top-[200px] left-[50px]">
            <div className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              <span>Healthy Leg</span>
            </div>
          </div>

          <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {healthData.map((item) => (
          <HealthStatusCard key={item.id} title={item.title} date={item.date} status={item.status} icon={item.icon} />
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <button className="text-blue-600 text-sm flex items-center">
          Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
