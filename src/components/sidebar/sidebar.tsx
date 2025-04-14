// Sidebar.tsx
'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  XMarkIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import router from 'next/router';
import {deleteCookie} from 'cookies-next'
import { FaHome,FaTshirt, FaGlassWhiskey,FaCouch, FaMobileAlt, FaPlug, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

const handleLogout = (e: React.MouseEvent) => {
  e.preventDefault();
  deleteCookie('accessToken');
  localStorage.removeItem('authState');
  sessionStorage.removeItem('sessionData');
  // router.push('/auth');
  window.location.reload();
};

const navigation = [
  { name: 'Home', href: '/dashboard/home', icon: FaHome, current: false },
  { name: 'Fashion', href: '/dashboard/fashion', icon:FaTshirt, current: false },
  { name: 'Beverages', href: '/dashboard/beverages', icon:FaGlassWhiskey, current: false },
  { name: 'Phones', href: '/dashboard/phone', icon:FaMobileAlt, current: false },
  { name: 'Furnitures', href: '/dashboard/furniture', icon:FaCouch, current: false },
  { name: 'Electronics', href: '/dashboard/electronics', icon:FaPlug, current: false },
  { name: 'My Cart', href: '/dashboard/cartorder', icon:FaShoppingCart, current: false },
  // { name: 'Sign Out', href: '#', icon:FaSignOutAlt, current: false,className: 'text-red-800 !important',onClick:handleLogout},

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
 
  return (
    <>
      {/* Mobile Sidebar (Dialog) */}
      <Dialog open={isOpen} onClose={onClose} className="relative z-50 lg:hidden bg-sky-800">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex bg-sky-800">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0 bg-sky-800">
                <button type="button" onClick={onClose} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sky-800 px-6 pb-4 text-white">
              <div className="flex h-16 shrink-0 items-center bg-sky-800">
                <img
                  alt="Your Company"
                  src="/images/uplogo.jpg"
                  className="h-8 w-auto" 
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-white hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                                'size-6 shrink-0'
                              )}
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>

                  </li>
                  <li className="mt-auto">
              <Link
                  href="#" onClick={handleLogout}
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-white hover:bg-gray-800 hover:text-white"
                >
                  <FaSignOutAlt
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-300 group-hover:text-white"
                  />
                  Sign Out
                </Link>
                </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-sky-800">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sky-800 px-6 pb-4 text-white bg-sky-800">
          <div className="flex h-16 shrink-0 items-center bg-sky-800">
            <img
              alt="Your Company"
              src="/images/uplogo.jpg"
              className="h-8 w-20" 
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-5">
                  {navigation.map((item) => (
                    <li key={item.name}>
                    <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-white hover:bg-gray-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                            'size-6 shrink-0'
                          )}
                        />
                        {item.name}
                  </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
               
              </li>
              <li className="mt-auto">
              <Link
                  href="#" onClick={handleLogout}
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-white hover:bg-gray-800 hover:text-white"
                >
                  <FaSignOutAlt
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-300 group-hover:text-white"
                  />
                  Sign Out
                </Link>
                {/* <Link
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold text-white hover:bg-gray-800 hover:text-white"
                >
                  <Cog6ToothIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-300 group-hover:text-white"
                  />
                  Settings
                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

// function deleteCookie(arg0: string) {
//   throw new Error('Function not implemented.');
// }
