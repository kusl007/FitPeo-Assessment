export default function ActivityFeed() {
  // Mock data for the activity chart
  const activityData = [
    { day: "Mon", values: [0.3, 0.5, 0.2] },
    { day: "Tue", values: [0.6, 0.3, 0.4] },
    { day: "Wed", values: [0.2, 0.8, 0.3] },
    { day: "Thu", values: [0.5, 0.4, 0.7] },
    { day: "Fri", values: [0.3, 0.6, 0.2] },
    { day: "Sat", values: [0.7, 0.3, 0.5] },
    { day: "Sun", values: [0.4, 0.2, 0.1] },
  ]

  const colors = ["bg-cyan-400", "bg-blue-600", "bg-green-400"]

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-500">3 appointment on this week</span>
      </div>

      <div className="h-48 flex items-end space-x-6">
        {activityData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center space-y-2">
            <div className="w-full flex items-end justify-center space-x-1 h-40">
              {item.values.map((value, valueIndex) => (
                <div
                  key={valueIndex}
                  className={`${colors[valueIndex]} w-2 rounded-t-sm`}
                  style={{ height: `${value * 100}%` }}
                ></div>
              ))}
            </div>
            <div className="text-xs text-gray-500">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
