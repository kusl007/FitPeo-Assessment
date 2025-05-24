export default function ActivityFeed() {
  const activityData = [
    { day: "Mon", values: [0.3, 0.5, 0.2] },
    { day: "Tue", values: [0.6, 0.3, 0.4] },
    { day: "Wed", values: [0.2, 0.8, 0.3] },
    { day: "Thu", values: [0.5, 0.4, 0.7] },
    { day: "Fri", values: [0.3, 0.6, 0.2] },
    { day: "Sat", values: [0.7, 0.3, 0.5] },
    { day: "Sun", values: [0.4, 0.2, 0.1] },
  ];

  const colors = ["bg-cyan-400", "bg-blue-600", "bg-green-400"];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-500">3 appointments this week</span>
      </div>

      <div className="h-40 sm:h-48 flex items-end space-x-3 sm:space-x-6 overflow-x-auto scrollbar-hide">
        {activityData.map((item, index) => (
          <div key={index} className="flex-1 min-w-[32px] sm:min-w-0 flex flex-col items-center space-y-1">
            <div className="w-full flex items-end justify-center space-x-[2px] sm:space-x-1 h-32 sm:h-40">
              {item.values.map((value, valueIndex) => (
                <div
                  key={valueIndex}
                  className={`${colors[valueIndex]} w-1.5 sm:w-2 rounded-t-sm`}
                  style={{ height: `${value * 100}%` }}
                />
              ))}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
