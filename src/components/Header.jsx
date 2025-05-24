"use client"

import { Search, Bell, Plus } from "lucide-react"



export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-4 w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 h-10 w-full bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <Bell className="h-5 w-5" />
        </button>
        <div className="h-9 w-9 rounded-md bg-cyan-500 flex items-center justify-center">
          <span className="text-white font-medium text-sm">👨</span>
        </div>
        <button className="rounded-md bg-indigo-600 h-9 w-9 flex items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
