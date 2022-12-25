import React from "react"

import type { NextPage } from "next"
import SubscribeForm from "@components/Subscribe"
import { Nav } from "@components/Elements/Navbar"

const Home: NextPage = () => {
  const CONVERTKIT_LANDING_FORM_ID = "3891829"
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col items-center lg:flex-row mt-10 lg:mt-3">
        <div className="lg:w-1/2 w-full left-0 absolute flex-1">
          <Nav />
          <div className="flex flex-col py-10 text-justify mx-auto px-12 justify-center mt-8">
            <h1 className="font-medium text-3xl lg:text-4xl dark:text-secondary-light">
              New year, new look 😌💅
            </h1>

            <p className="pt-3.5 opacity-75 text-xl max-w-md lg:text-2xl">
              Join the newsletter to get alerted when the site launches.
            </p>
          </div>

          <div className="px-8">
            <div 
              className="text-black w-full dark:text-secondary-lighter bg-white dark:bg-primary-lighter border border-primary dark:border-secondary-lighter flex flex-col items-center px-8 py-10 rounded-3xl z-10 md:px-14 lg:py-16 selection:bg-black selection:text-white"
            >
              <SubscribeForm formId={CONVERTKIT_LANDING_FORM_ID} />
            </div>
          </div>
        </div>

        <div className="hidden absolute w-1/2 right-0 lg:flex flex-2 min-h-screen h-full bg-cover bg-comingSoon bg-no-repeat bg-scroll bg-center"  />
      </div>
    </>
  )
}

export default Home
