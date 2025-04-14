
'use client'

import { UsersIcon, ChartBarIcon, ChevronDownIcon } from '@heroicons/react/24/outline'


export default function Dashboard() {
  return (
    <div className="h-screen py-10 bg-black text-white overflow-y-auto">
      <div className="px-4 sm:px-6 lg:px-8">

        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="mt-2 text-gray-300">Welcome back! Here’s your latest update.</p>
        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          <div className="flex items-center space-x-3 bg-gray-900 rounded-lg p-4 animate-pulse">
            <UsersIcon className="h-8 w-8 text-indigo-400" />
            <div>
              <p className="text-sm text-gray-400">Online Users</p>
              <p className="text-xl font-semibold">87</p>
            </div>
          </div>   <div className="flex items-center space-x-3 bg-gray-900 rounded-lg p-4 animate-pulse delay-150">
            <ChartBarIcon className="h-8 w-8 text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Growth</p>
              <p className="text-xl font-semibold">+15%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-gray-900 rounded-lg p-4 animate-pulse delay-300">
            <UsersIcon className="h-8 w-8 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Active Teams</p>
              <p className="text-xl font-semibold">12</p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Card 1: User Stats */}
          <div className="bg-white-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white">Total Users</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-400 animate-bounce-in">1,234</p>
            <p className="mt-1 text-sm text-gray-300">+12% from last month</p>
          </div>

          {/* Card 2: Revenue */}
          <div className="bg-white-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white">Revenue</h3>
            <p className="mt-2 text-3xl font-bold text-green-400 animate-bounce-in">56,789</p>
            <p className="mt-1 text-sm text-gray-300">+8% from last month</p>
          </div>

          {/* Card 3: Active Projects */}
          <div className="bg-white-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white">Active Projects</h3>
            <p className="mt-2 text-3xl font-bold text-blue-400 animate-bounce-in">42</p>
            <p className="mt-1 text-sm text-gray-300">3 completed this week</p>
          </div>
        </div>


        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 animate-fade-in">Project Progress</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-300">Project A</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div className="bg-indigo-500 h-2.5 rounded-full animate-progress" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300">Project B</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div className="bg-green-500 h-2.5 rounded-full animate-progress" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gray-800 rounded-lg p-6 mb-8 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-4">Performance Chart</h2>
          <div className="h-64 bg-gray-900 rounded-md flex items-center justify-center">
            <p className="text-gray-400 animate-pulse">Chart Coming Soon...</p>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            New Project
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Generate Report
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            View Team
          </button>
        </div>
      </div>
    </div>
  )
}