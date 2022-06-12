import { Disclosure } from "@headlessui/react";
import IProps from "./IProps";
import {NavLink, useLocation} from 'react-router-dom';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Head = ({repositories}:IProps):JSX.Element => {
    const location = useLocation();

    const currentLocation = location.pathname;

    const isCurrentRoute = (href:string) => currentLocation === href;
    
    return <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {repositories.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isCurrentRoute(item.href)
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={isCurrentRoute(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {repositories.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={classNames(
                  isCurrentRoute(item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={isCurrentRoute(item.href) ? 'page' : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
}

export default Head;