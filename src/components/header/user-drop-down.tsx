// src/components/header/UserDropdown.tsx
'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface UserDropdownProps {
  userName?: string
  userImage?: string
}

export function UserDropdown({ 
  userName = 'Richard', 
  userImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}: UserDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="-m-1.5 flex items-center p-1.5 focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <Image
            src={userImage}
            alt="User profile"
            width={32}
            height={32}
            className="size-8 rounded-full bg-gray-800"
            unoptimized
          />
          <span className="hidden lg:flex lg:items-center">
            <span className="ml-4 text-sm/6 font-semibold text-white">
              {userName}
            </span>
            <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-300" />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[120px] rounded-md bg-gray-800 p-1 shadow-lg ring-1 ring-gray-700 will-change-[opacity,transform]"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item 
            className="flex cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm text-white outline-none hover:bg-red-800 focus:bg-red-800"
          >
            Your Profile
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="m-1 h-px bg-gray-700" />
          <DropdownMenu.Item 
            className="flex cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm text-white outline-none hover:bg-red-800 focus:bg-red-800"
          >
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}