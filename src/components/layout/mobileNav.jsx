import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white block sm:hidden">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <Link to="/">
                 <img src="/images/logo.svg" alt="OpenNest logo" />
            </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-lg bg-blue text-sm focus:ring-2 focus:ring-white focus:ring-offset-2  focus:outline-hidden">
                   <Link to="/signup">
                    <h2 className='text-white py-2 p-3 text-md font-semibold'>Sign up</h2>
                   </Link>
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
            <DisclosureButton
              className={'w-full text-start  bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'} >
                  <ul>
                    <li className='hover:bg-gray-700 hover:text-white hover:w-max py-2 px-3 hover:rounded-lg'>
                       <Link>Uses Cases</Link>
                    </li>

                    <li className='hover:bg-gray-700 hover:text-white hover:w-max py-2 px-3 hover:rounded-lg' >
                       <Link to="/resources">Resources</Link>
                    </li>

                    <li className='hover:bg-gray-700 hover:text-white hover:w-max py-2 px-3 hover:rounded-lg'>
                       <Link to="/about-us">About us</Link>
                    </li>
                    
                    <li className='hover:bg-gray-700 hover:text-white hover:w-max py-2 px-3 hover:rounded-lg'>
                       <Link>What's new</Link>
                    </li>
                </ul>
              
            </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}