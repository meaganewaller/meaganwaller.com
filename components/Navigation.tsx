import dynamic from "next/dynamic";
import Link from "next/link";
import { nav, meta } from "@data/meta";
import { useRouter } from "next/router";
import { Logo } from "./Icons/Logo";

// const MobileNav = dynamic(() => import("@components/MobileNav"))
// const Settings = dynamic(() =>  import("@components/Settings"))
// const Popover = dynamic(() => import("@components/NavPopover"))

function NavItem({ href, text, target, icon }) {
  const router = useRouter()
  return (
    <Link href={href} key={href} target={target} className="text-primary dark:text-white nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-primary hover:text-white motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-primary-light sm:px-3 sm:py-2 md:inline-block">
      {icon}
    </Link>
  )
}

export function Nav() {
  return (
    <nav key="nav" className="fixed top-0 z-[100] mx-0 mt-0 w-full font-secondary shadow dark:shadow-2xl">
      <div className="relative mx-auto flex-h-[73px] w-full items-center justify-between border-b border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-primary-darker dark:bg-opacity-70 dark:firefox:bg-opacity-100">
        <div className="fixed inset-0 z-[-1] h-[inherit] w-full background-blur-xl" />
        <Link href="/" key="main_page">
          <Logo width={200} height={35} className="z-[1001] mx-8 duration-300 motion-reduce:transition-none" />
        </Link>
      </div>
    </nav>
  )
}
