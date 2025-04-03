// Header.tsx
'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { UserDropdown } from './user-drop-down'


const userNavigation = [
  // { name: 'Your profile', href: '#' },
  // { name: 'Sign out', href: '/auth'},
]

interface HeaderProps {
  onSidebarToggle: () => void
}

export function Header({ onSidebarToggle }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-700 bg-sky-800 px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 text-white">
      {/* Left side buttons (unchanged) */}
      <button 
        type="button" 
        onClick={onSidebarToggle} 
        className="-m-2.5 p-2.5 text-white lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <div aria-hidden="true" className="h-6 w-px bg-gray-700 lg:hidden" />

      {/* Main header content */}
      <div className="flex flex-1 items-center justify-between self-stretch bg-sky-800">
        {/* Centered h1 */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-white text-xl font-bold whitespace-nowrap">
            AFRICA No 1 E-COMMERCE PLATFORM
          </h1>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-300 hover:text-white">
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-700" />
          
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}