import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  AtSymbolIcon,
  DocumentTextIcon,
  LockClosedIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'About',             description: '', href: '#', icon: UserGroupIcon },
  { name: 'FAQs',              description: '', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Blog',              description: '', href: '#', icon: ChatBubbleLeftEllipsisIcon },
  { name: 'Follow Us',         description: '', href: '#', icon: AtSymbolIcon },
  { name: 'Terms & Condition', description: '', href: '#', icon: DocumentTextIcon },
  { name: 'Privacy Policy',    description: '', href: '#', icon: LockClosedIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact us', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-4" aria-label="Global">

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-gray-300" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-orange-500 transition">
            Play
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-orange-500 transition">
            Leaderboard
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-orange-500 transition">
            Tournament
          </a>
          <Popover className="relative">
            <Popover.Button className="group flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300 outline-none hover:text-orange-500 transition">
              More
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-300 group-hover:text-orange-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-lg bg-gray-800 shadow ring-1 ring-gray-900/5">
                <div className="p-3">

                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-900"
                    >
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-gray-700">
                        <item.icon className="h-6 w-6 text-gray-300 group-hover:text-orange-500" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-200">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="text-sm text-gray-300">{item.description}</p> */}
                      </div>
                    </div>
                  ))}

                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-100">

                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}

                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-6">
          <a href="#" className="flex rounded bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-2 text-sm text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-600">
            <PlusIcon className='h-5 w-5 mr-1' />
            Organize an Event
          </a>
          <button 
            onClick={() => navigate('/login')} 
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-orange-500 transition">
            Log in
          </button>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100/50">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                  Features
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                  Marketplace
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                  Company
                </a>
              </div>
              <div className="py-6 space-y-2">
                <a href="#" className="-mx-3 flex rounded bg-gradient-to-r from-orange-500 to-orange-700 px-3 py-2.5 text-sm text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-orange-600">
                  <PlusIcon className='h-5 w-5 mr-1' />
                  Organize an Event
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-700">
                  Log in
                </a>
              </div>
            </div>
          </div>

        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
