

export default function SimpleAppointmentCard({ title, time, icon:Icon, color }) {
  const getBgColor = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50"
      case "red":
        return "bg-red-50"
      case "green":
        return "bg-green-50"
      default:
        return "bg-gray-50"
    }
  }

  return (
    <div className={`${getBgColor()} rounded-xl p-4 flex justify-between items-center`}>
      <div>
        <h4 className="font-medium text-gray-800 text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <div className="text-gray-600">{Icon && <Icon className="h-6 w-6" />}</div>
    </div>
  )
}
