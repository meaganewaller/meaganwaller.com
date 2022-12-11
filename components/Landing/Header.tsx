import Link from "next/link"
import { nav } from "@data/meta"
import { useRouter } from "next/router"
import clsx from "clsx";
import Logo from "@components/Icons/Logo"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'

function NavItem({ href, text, target }) {
  const router = useRouter();
  const isActive = router.asPath.split("/")[1].trim() === href.split("/")[1].trim();
  return (
    <Link 
      key={href}
      href={href}
      target={target}
      className={clsx(
      "inline-block squiggle pb-1.5 ml-12 max-w-full text-lg text-yellow-green-500 bg-transparent cursor-pointer hover:text-yellow-green-300 hover:no-underline",
      { ["active"]: isActive }, 
      { ["text-yellow-green-500"]: !isActive })}
      style={{ transition: "opacity 200ms ease 0s", textDecoration: "none" }}>
      <h6 className="my-0 font-sans text-sm font-normal tracking-tight uppercase" style={{ lineHeight: "1.1" }}>
        {text}
      </h6>
    </Link>
  )
}

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>  {
        setShowNavBar(window.pageYOffset > 200)
      })
    }
  }, [])

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showNavBar ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 }}}
        style={{animationDelay: "-1ms", animationDuration: "1ms", animationIterationCount: "1", transitionDelay: "0s", transitionDuration: "0ms", maxWidth: "100vw", overflowWrap: "anywhere"}}
        className="flex fixed z-10 justify-between items-center py-4 px-6 w-full leading-5 text-emerald-900 bg-emerald-900">
        <Link
          href="/"
          aria-current="page"
          className="inline-block max-w-full text-yellow-green-500 bg-transparent cursor-pointer">
          <Logo className="block max-w-full align-middle border-0" width={200} height={30} />
        </Link>
        <div className="flex text-emerald-900">
          {nav.main.map((item) => {
            return <NavItem href={item.href} text={item.title} target={item.target} key={item.title} />
          })}
        </div>
      </motion.div>
      <div className="pt-6 mb-0 leading-6 bg-emerald-900 text-emerald-900">
        <div className="px-16 pt-16 pb-0 mx-auto -mb-4 text-yellow-green-500" style={{ maxWidth: "100vw" }}>
          <Link
            href="/"
            aria-current="page"
            className="block mx-auto w-full max-w-full text-base cursor-pointer -order-1"
            style={{ textDecoration: "none" }}
          >
            <Logo className="inline-block max-w-full align-middle border-0" />
          </Link>
        </div>
      </div>
      </>
  )
}

export default Header
