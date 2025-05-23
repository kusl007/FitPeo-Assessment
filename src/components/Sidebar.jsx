import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart2,
  Microscope,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  

  const toolsItems = [
    { icon: MessageSquare, label: "Chat", active: false },
    { icon: HelpCircle, label: "Support", active: false },
    { icon: Settings, label: "Setting", active: false },
  ]
    const [navItems, setNavItems] = useState([
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: History, label: "History", active: false },
    { icon: Calendar, label: "Calendar", active: false },
    { icon: ClipboardList, label: "Appointments", active: false },
    { icon: BarChart2, label: "Statistics", active: false },
    { icon: Microscope, label: "Tests", active: false },
  ]);

  const handleClick = (label) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.label === label
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };


  return (
    <aside className="w-48 bg-white border-r flex flex-col min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-semibold">
          <span className="text-cyan-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      <div className="px-4 py-2">
        <p className="text-xs text-gray-400 font-medium mb-2 px-2">General</p>
        <nav className="space-y-1">
          {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          onClick={() => handleClick(item.label)}
          className={`flex items-center space-x-3 px-2 py-2 rounded-md text-sm ${
            item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <item.icon className={`h-5 w-5 ${item.active ? "text-blue-600" : "text-gray-500"}`} />
          <span>{item.label}</span>
        </a>
      ))}
        </nav>
      </div>
      <div className="px-4 py-2 mt-4">
        <p className="text-xs text-gray-400 font-medium mb-2 px-2">Tools</p>
        <nav className="space-y-1">
          {toolsItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-3 px-2 py-2 rounded-md text-sm ${
                item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className={`h-5 w-5 ${item.active ? "text-blue-600" : "text-gray-500"}`} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
