import { Disclosure } from "@headlessui/react";
import IProps from "./IProps";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Head = ({repositories}:IProps):JSX.Element => {
    return <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {repositories.map((item) => (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className={classNames(
                        item.current()
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current() ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {repositories.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                onClick={()=>item.action()}
                className={classNames(
                  item.current() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current() ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
}

export default Head;