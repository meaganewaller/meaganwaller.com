import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { nameToEmoji } from "gemoji";
import Link from "next/link";

import Icon from "@components/FeatherIcons";
import Twemoji from "@components/Twemoji";
import nav from "@data/meta";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <nav
      aria-label="Navigation Menu"
      className="sticky top-0 z-10 mx-auto mb-16 flex w-full flex-nowrap justify-center bg-white !bg-opacity-50 p-2 backdrop-blur dark:bg-gray-900 print:hidden"
    >
      <div className="flex w-full max-w-6xl flex-nowrap items-center justify-between">
        <div className="flex flex-shrink-0">
          {nav.map(({ name, emoji, href }, i, a) => (
            <div key={name} className="my-3 inline-block">
              <Link href={href}>
                <a className="flex items-center justify-between rounded px-2.5 py-1.5 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                  <span className="flex select-none items-center justify-between pr-2 text-sm" aria-hidden="true">
                    <Twemoji priority emoji={nameToEmoji[emoji]} />
                  </span>
                  <span>{name}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-shrink-0 space-x-2">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-10 w-10 rounded p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && <Icon name={resolvedTheme === "dark" ? "FiSun" : "FiMoon"} className="h-4 w-4 text-gray-800 dark:text-gray-200" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// import dynamic from "next/dynamic"
// import { comingSoonNav } from "@data/meta"
// import Link from "next/link"
// import { Logo, DarkLogo } from "@components/Icons/Logo"
// import { SmallLogo, DarkSmallLogo } from "@components/Icons/SmallLogo"
// import { useRouter } from "next/router"
// import { useTheme } from "next-themes"
//
// const MobileNav = dynamic(() => import("./MobileNav"))
// const Settings = dynamic(() => import("./Settings"))
//
// function NavItem({ href, text, target, icon }) {
//   const router = useRouter();
//   const isActive = router.asPath.split("/")[1].trim() === href.split("/")[1].trim()
//
//   return (
//     <Link
//       href={href}
//       key={href}
//       target={target}
//       className={`${isActive ? "active text-primary-darker dark:text-secondary" : "text-primary dark:text-white"} nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-secondary-lighter hover:text-primary-darker motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block`}>
//       {icon !== "undefined" ? <>{icon()}</> : <span className="mb-2">{text}</span>}
//     </Link>
//   )
// }
//
// export function Nav() {
//   const { resolvedTheme } = useTheme();
//
//   return (
//     <nav key="nav" className="top-0 fixed z-[100] mx-0 mt-0 lg:w-1/2 w-full left-0 font-mono">
//       <div className="relative mx-auto flex h-[73px] w-full items-center justify-between pt-4 pb-4 duration-300 motion-reduce:transition-none">
//         <div className="fixed inset-0 z-[-1] h-[inherit] w-full"></div>
//         <Link href="/" key="main_page">
//           <div className=" z-[1001] mx-8 duration-300 motion-reduce:transition-none">
//             {resolvedTheme === "dark" ? (
//             <>
//               <DarkLogo className="max-w-full h-8 inline-block" />
//             </>
//             ) : (
//             <>
//              <Logo className="max-w-full h-8 inline-block" />
//             </>
//             )}
//           </div>
//         </Link>
//         <MobileNav />
//         <div className="mr-auto flex gap-1">
//           {comingSoonNav.main.map((item, index:number) => {
//             return <NavItem href={item.href} text={item.title} target={item.target} key={index} icon={item.icon} />;
//           })}
//           {/* <Popover className="relative" /> */}
//         </div>
//         <div className="ml-auto flex gap-1">
//           {/* {nav.secondary.map((item, index:number) => { */}
//           {/*   return <NavItem href={item.href} text={item.title} target={item.target} key={index} />; */}
//           {/* })} */}
//           <Settings className="text-right" />
//         </div>
//       </div>
//     </nav>
//   )
// }
