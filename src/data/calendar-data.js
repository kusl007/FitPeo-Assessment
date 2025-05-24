import { Smile, Activity } from "lucide-react"

export const calendarData = {
  timeSlots: [
    [
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
      { time: "12:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "08:00", available: true, highlight: false },
      { time: "09:00", available: true, highlight: true },
      { time: "10:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "12:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
      { time: "13:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "—", available: false, highlight: false },
      { time: "14:00", available: true, highlight: false },
      { time: "16:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "12:00", available: true, highlight: false },
      { time: "14:00", available: true, highlight: false },
      { time: "15:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
    [
      { time: "09:00", available: true, highlight: false },
      { time: "10:00", available: true, highlight: false },
      { time: "11:00", available: true, highlight: false },
      { time: "—", available: false, highlight: false },
    ],
  ],
  appointments: [
    {
      id: 1,
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Cameron Williamson",
    //   icon: <Smile className="h-6 w-6" />,
      icon: Smile ,
      color: "bg-indigo-600",
    },
    {
      id: 2,
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Kevin Dones",
      icon: Activity,
      color: "bg-blue-400",
    },
  ],
}
