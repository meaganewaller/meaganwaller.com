import dynamic from "next/dynamic"
import { nav } from "@data/meta"
import Link from "next/link"
import Logo from "@components/Icons/Logo"
import SmallLogo from "@components/Icons/SmallLogo"
import { useRouter } from "next/router"

const MobileNav = dynamic(() => import("./MobileNav"))
const Settings = dynamic(() => import("./Settings"))
const Popover = dynamic(() => import("./NavPopover"))

function NavItem({ href, text, target }) {
  const router = useRouter();
  const isActive = router.asPath.split("/")[1].trim() === href.split("/")[1].trim()
  return (
    <Link href={href} key={href} target={target} className={`${isActive ? "active text-yellow-green-500 dark:text-gray-200" : "text-yellow-green-600 dark:text-gray-400"} nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-yellow-green-200 hover:text-yellow-green-800 motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:inline-block`}>
      <span className="mb-2">{text}</span>
    </Link>
  )
}

export function Nav() {
  return (
    <nav key="nav" className="fixed top-0 z-[100] mx-0 mt-0 max-w-full w-full font-mono shadow dark:shadow-2xl">
      <div className="relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-yellow-green-500 bg-emerald-900 bg-opacity-90 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-[#08152b] dark:bg-opacity-90 dark:firefox:bg-opacity-100">
        <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-xl"></div>
        <Link href="/" key="main_page">
          <div className=" z-[1001] mx-8 duration-300 motion-reduce:transition-none">
            <SmallLogo className="max-w-full h-8 md:hidden" />
            <Logo className="max-w-full h-8 sm:hidden md:inline-block" />
          </div>
        </Link>
        <MobileNav />
        <div className="mr-auto flex gap-1">
          {nav.main.map((item, index:number) => {
            return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
          })}
          <Popover className="relative" />
        </div>
        <div className="ml-auto flex gap-1">
          {nav.secondary.map((item, index:number) => {
            return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
          })}
          <Settings className="text-right" />
        </div>
      </div>
    </nav>
  )
}
