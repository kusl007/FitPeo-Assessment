import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { calendarData } from "../data/calendar-data";
import AppointmentCard from "./AppointmentCard";

export default function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">This Week</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          <ChevronLeft className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          <div className="text-lg font-semibold text-gray-800">October 2021</div>
          <ChevronRight className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day, index) => (
          <div key={day} className="text-center">
            <div className="text-xs text-gray-500 mb-2">{day}</div>
            <div
              className={`text-sm font-medium rounded-full h-8 w-8 flex items-center justify-center mx-auto transition-colors ${
                index === 3 
                  ? "bg-indigo-600 text-white" 
                  : index === 4
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {dates[index]}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarData.timeSlots.map((slot, index) => (
          <div key={index} className="text-center space-y-1">
            {slot.map((time, timeIndex) => (
              <div
                key={timeIndex}
                className={`text-xs py-1 px-2 rounded transition-colors ${
                  time.available 
                    ? time.highlight 
                      ? "bg-blue-100 text-blue-600" 
                      : "text-gray-800 hover:bg-gray-50" 
                    : "text-gray-400"
                }`}
              >
                {time.time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {calendarData.appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
          />
        ))}
      </div>
    </div>
  );
}
