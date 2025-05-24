import { appointmentData } from "../data/appointment-data"
import SimpleAppointmentCard from "./SimpleAppointmentCard.jsx"

export default function UpcomingSchedule() {
  const groupedAppointments = appointmentData.reduce(
    (acc, appointment) => {
      if (!acc[appointment.day]) {
        acc[appointment.day] = []
      }
      acc[appointment.day].push(appointment)
      return acc
    },
    {}
  )

  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>

      {Object.entries(groupedAppointments).map(([day, appointments]) => (
        <div key={day} className="mb-6 last:mb-0">
          <h3 className="text-sm text-gray-500 mb-3">On {day}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                color={appointment.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
