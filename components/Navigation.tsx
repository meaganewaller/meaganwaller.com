import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiChevronDownCircle } from 'react-icons/bi';

export const NavigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Uses',
    href: '/uses',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'RSS',
    href: '/rss.xml',
  },
];

export const NavLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} className="transition hover:text-primary">
      {children}
    </Link>
  );
};

const NavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  const isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive ? 'text-primary' : 'hover:text-primary',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export const MobileNavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
};

export const DesktopNavigation = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {NavigationItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavigation = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <BiChevronDownCircle className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <AiOutlineCloseCircle className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {NavigationItems.map((item) => (
                  <MobileNavItem key={item.href} href={item.href}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { nav, meta } from "@data/meta";
// import { useRouter } from "next/router";
// import { Logo } from "./Icons/Logo";

// // const MobileNav = dynamic(() => import("@components/MobileNav"))
// // const Settings = dynamic(() =>  import("@components/Settings"))
// // const Popover = dynamic(() => import("@components/NavPopover"))

// function NavItem({ href, text, target, icon }) {
//   const router = useRouter()
//   return (
//     <Link href={href} key={href} target={target} className="text-primary dark:text-white nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-primary hover:text-white motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-primary-light sm:px-3 sm:py-2 md:inline-block">
//       {icon}
//     </Link>
//   )
// }

// export function Nav() {
//   return (
//     <nav key="nav" className="fixed top-0 z-[100] mx-0 mt-0 w-full font-mono shadow dark:shadow-2xl">
//       <div className="relative mx-auto flex-h-[73px] w-full items-center justify-between border-b border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-primary-darker dark:bg-opacity-70 dark:firefox:bg-opacity-100">
//         <div className="fixed inset-0 z-[-1] h-[inherit] w-full background-blur-xl" />
//         <Link href="/" key="main_page">
//           <Logo width={200} height={35} className="z-[1001] mx-8 duration-300 motion-reduce:transition-none" />
//         </Link>
//       </div>
//     </nav>
//   )
// }
