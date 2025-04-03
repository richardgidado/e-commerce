"use client"

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import React from 'react'
import { useState } from 'react'



export default function layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // const [data:user]= useUser()

  return (
    <>
      <Header onSidebarToggle={() => setSidebarOpen(true)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className='py-10'>
      <div className='lg:pl-72'> 
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        </div>
        </main>
    </>

  )
}