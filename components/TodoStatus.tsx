'use client'

import {
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
  useTransition,
} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { TodoType } from './Todo'
import { setTodoStatus } from '@/utils/actions'

interface TodoStatusModel {
  todo: TodoType
  change: Dispatch<SetStateAction<string>>
}

const statuses = [
  {
    key: 'pending',
    text: 'Pending',
    color: 'bg-neutral-400',
  },
  {
    key: 'in_progress',
    text: 'In progress',
    color: 'bg-amber-300',
  },
  {
    key: 'completed',
    text: 'Completed',
    color: 'bg-green-400',
  },
]

const TodoStatus = ({ todo, change }: TodoStatusModel) => {
  const [, startTransition] = useTransition()
  const [selected, setSelected] = useState(
    statuses.find((status) => status.key === todo.todoStatus) || statuses[0],
  )

  return (
    <Listbox
      value={selected}
      onChange={(input) => {
        setSelected(input)
        change(input.key)
        startTransition(() => setTodoStatus(todo.id, todo.content, input.key))
      }}
    >
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base sm:leading-6">
            <span className="flex items-center">
              <span
                className={`rounded-full shrink-0 w-2 h-2 inline-block ${selected.color}`}
              ></span>
              <span className="ml-3 block truncate">{selected.text}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {statuses.map((status) => (
                <Listbox.Option
                  key={status.key}
                  className={({ active }) =>
                    `${
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                    } relative cursor-default select-none py-2 pl-3 pr-9`
                  }
                  value={status}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={`rounded-full shrink-0 w-2 h-2 inline-block ${status.color}`}
                        ></span>
                        <span
                          className={`ml-3 block truncate ${
                            selected ? 'font-semibold' : 'font-normal'
                          }`}
                        >
                          {status.text}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                            active ? 'text-white' : 'text-indigo-600'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default TodoStatus
