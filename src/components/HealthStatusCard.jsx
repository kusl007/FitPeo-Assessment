



export default function HealthStatusCard({ title, date, status, icon:Icon }) {
  const getStatusColor = () => {
    switch (status) {
      case "good":
        return "bg-green-100"
      case "warning":
        return "bg-yellow-100"
      case "critical":
        return "bg-red-100"
      default:
        return "bg-gray-100"
    }
  }

  const getStatusBarColor = () => {
    switch (status) {
      case "good":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "critical":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">{Icon && <Icon className="h-6 w-6" />}</div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-sm font-medium text-gray-800">{title}</h4>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div className={`h-2 rounded-full w-full ${getStatusColor()}`}>
          <div
            className={`h-2 rounded-full ${getStatusBarColor()}`}
            style={{ width: status === "good" ? "80%" : status === "warning" ? "60%" : "30%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
