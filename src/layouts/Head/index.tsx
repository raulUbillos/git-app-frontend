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
    
    return <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <>
        <div className="max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="md:block">
                <div className="flex items-baseline space-x-4">
                  {repositories.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          isCurrentRoute(item.href)
                            ? 'border-b-solid border-b-black border-b-2'
                            : ' hover:border-b-solid hover:border-b-black hover:border-b-2',
                          'text-black h-full px-3 py-2 rounded-md text-lg font-medium'
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
      </>
    )}
  </Disclosure>
}

export default Head;