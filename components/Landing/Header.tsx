import { nav } from "@data/meta"
import { Logo } from "@components/Icons/Logo"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { SmallLogo } from "@components/Icons/SmallLogo"
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'


function NavItem({ href, text }) {
  return (
    <Link 
      activeClass="active"
      smooth={true}
      spy={true}
      to={href}
      offset={-40}
      duration={500}
      isDynamic={true}
      className="inline-block text-secondary-lighter squiggle pb-1.5 md:ml-12 ml-3 max-w-full text-lg bg-transparent cursor-pointer hover:no-underline"
      style={{ transition: "opacity 200ms ease 0s", textDecoration: "none" }}>
      <h6 className="mt-0 mb-[3px] font-sans text-sm font-normal tracking-tight uppercase" style={{ lineHeight: "1.1" }}>
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
        className="flex fixed z-10 justify-between items-center py-4 px-6 w-full leading-5 dark:bg-primary-darker bg-secondary">
        <Link
          href="/"
          aria-current="page"
          className="inline-block max-w-full bg-transparent cursor-pointer">
          <SmallLogo className=" max-w-full align-middle border-0 h-8 md:hidden" />
          <Logo className="md:block max-w-full align-middle border-0 sm-max:hidden" width={200} height={30} />
        </Link>
        <div className="flex">
          {nav.main.map((item) => {
            return <NavItem href={item.href} text={item.title} key={item.title} />
          })}
        </div>
      </motion.div>
      <div className="pt-6 mb-0 leading-6">
        <div className="px-16 pt-16 pb-0 mx-auto -mb-4" style={{ maxWidth: "100vw" }}>
          <Link
            href="/"
            aria-current="page"
            className="block mx-auto w-full max-w-full text-base cursor-pointer -order-1"
            style={{ textDecoration: "none" }}
          >
            <Logo className="max-w-full align-middle border-0 inline-block" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
