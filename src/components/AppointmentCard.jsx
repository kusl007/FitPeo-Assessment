

export default function AppointmentCard({ title, time, doctor, icon:Icon, color }) {
  return (
    <div className={`${color} rounded-xl p-4`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-white mb-1">{title}</h3>
          <p className="text-xs text-white/80 mb-2">{time}</p>
          <p className="text-xs text-white/80">Dr. {doctor}</p>
        </div>
        <div className="text-white text-xl">
          {Icon && <Icon className="h-6 w-6" />} 
          </div>
      </div>
    </div>
  )
}
