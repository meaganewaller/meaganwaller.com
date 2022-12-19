import dynamic from "next/dynamic"
import { social } from "@data/meta"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { HiCog8Tooth, HiArrowTopRightOnSquare } from "react-icons/hi2"
const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), {
 loading: () => <div className="h-[36px] w-[126px] animate-pulse rounded-lg bg-yellow-green-200 dark:bg-zinc-200/[15%]" />,
})

export default function Settings(props) {
 const [isOpen, setIsOpen] = useState(false)
 return (
  <div {...props}>
   <button aria-label="Open settings" type="button" onClick={() => setIsOpen(true)} className={`${isOpen ? "bg-yellow-green-200 dark:bg-white/[15%]" : ""} group mr-[1rem] flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-green-500 transition-all duration-300 hover:bg-yellow-green-400 motion-reduce:transition-none dark:bg-white/10 dark:hover:bg-white/[15%]`}>
    <HiCog8Tooth className={`${isOpen ? "rotate-90 text-emerald-700 dark:text-white" : ""} h-5 w-5 text-emerald-900 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-emerald-700 motion-reduce:transition-none dark:text-gray-200 dark:group-hover:text-white`} />
   </button>
   <Transition.Root appear show={isOpen} as={Fragment}>
    <Dialog as="div" unmount={true} className="relative z-[99999]" onClose={() => setIsOpen(false)}>
     <Transition.Child as={Fragment} enter="ease-out duration-200 motion-reduce:transition-none" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200 motion-reduce:duration-[1ms]" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur firefox:bg-opacity-50" />
     </Transition.Child>
     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center font-inter">
       <Transition.Child as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:duration-[1ms]" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Dialog.Panel className="hide-scrollbar w-full max-w-md transform overflow-visible rounded-[10px] border-[1px] border-black/[15%] bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-white/[15%] dark:bg-[#08152b]">
         <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-zinc-600 duration-200 motion-reduce:transition-none dark:text-white">
          Settings
         </Dialog.Title>
         <div className="mt-2">
          <p className="text-base text-zinc-600 dark:text-slate-300">Here you can change your settings, e.g. website theme. Changes will be saved automatically.</p>
         </div>
         <div className="mt-2 divide-y divide-black/20 dark:divide-white/20">
          <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-black dark:text-white">
           Theme
           <div className="ml-auto w-32">
            <ThemeSwitch />
           </div>
          </div>
         </div>
         <div className="mt-4 flex items-center">
          <a target="_blank" rel="noreferrer" href={`https://github.com/${social.github.username}/${social.github.repo}`} className="full group flex items-start rounded-md px-2 py-3 text-sm text-black duration-200 motion-reduce:transition-none dark:text-white">
           Source code <HiArrowTopRightOnSquare className="ml-2 h-4 w-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" />
          </a>
          <button type="button" className="group my-2 ml-auto flex rounded-md border border-transparent bg-emerald-900 px-4 py-2 font-mono text-sm font-medium text-yellow-green-500 duration-200 hover:bg-emerald-800 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" onClick={() => setIsOpen(false)}>
           Close{" "}
           <svg className="mt-[2px] ml-2 h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
           </svg>
          </button>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition.Root>
  </div>
 )
}
