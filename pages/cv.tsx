import React from 'react'
import MenuBar from "@components/Elements/MenuBar"
import Window from "@components/Elements/Window"
import Image from "next/image"
import Link from "next/link"
import { useWindowSize } from "@lib/hooks/useWindowSize"

export default function CV() {
  const size = useWindowSize();

  return (
    <div>
      <MenuBar />

      <Window
        active={true}
        title="my resume"
        x={ (size.width * .25) / 2}
        y={size.height/8}
        zIndex="2"
        width={`${size.width * 0.75}px`}
      >
        <div className="max-w-full mx-auto my-auto bg-accentThird-light/50 bg-accentThird-light print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-0 lg:h-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 print:bg-white pt-0 font-extra">
          <header className="inline-flex items-baseline justify-between w-full mb-3 align-top">
            <div className="block">
              <h1 className="mb-0 text-5xl font-bold text-accentThird-dark">Meagan Waller</h1>
              <h2 className="m-0 text-2xl font-semibold text-accentThird-dark/90 leading-snugish">
                Senior Software Development Consultant
              </h2>
              <h3 className="m-0 mt-2 font-semibold text-md text-accentThird-dark/90 leading-snugish">
                Jacksonville, FL
              </h3>
            </div>
            <div
              className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-accentThird-light initials-container bg-accentThird-darker print:bg-black pb-[1.5rem] pt-[1.5rem]"
            >
              <div className="text-center initial">M</div>
              <div className="text-center initial">E</div>
              <div className="text-center initial">W</div>
            </div>
          </header>
          <Image src="/static/images/gifs/stardivider.webp" alt="stars divider" width={100} height={100} className="block mx-auto" />
          <div
            className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
          >
            <section className="pb-4 mt-4 first:mt-0">
              <div className="break-inside-avoid">
                <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                  <ul className="list-inside pr-7">
                    <li
                      className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
                    >
                      <Link href="https://meaganwaller.com" className="group">
                        <span className="mr-2 text-lg font-semibold text-accentFirst leading-snugish">
                          Portfolio:
                        </span>
                        meaganwaller.com
                        <span
                          className="inline-block font-normal transition duration-100 ease-in text-accentFirst-dark print:text-black group-hover:text-accentThird-dark print:none"
                        >
                          ↗
                        </span>
                      </Link>
                    </li>
                    <li
                      className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                    >
                      <Link href="https://github.com/Thomashighbaugh" className="group">
                        <span
                          className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                        >
                          Github:
                        </span>
                        Thomashighbaugh
                        <span
                          className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:"
                        >
                          ↗
                        </span>
                      </Link>
                    </li>
                    <li
                      className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                    >
                      <a href="mailto:thighbaugh@zoho.com" className="group">
                        <span
                          className="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                        >
                          Email:
                        </span>
                        thighbaugh@zoho.com
                        <span
                          className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                    <li
                      className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                    >
                      <a href="tel:+15103095128">
                        <span
                          className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                        >
                          Phone:
                        </span>
                        +1(510)309-5128
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
        </div>
      </Window>
    </div>
  )
}
