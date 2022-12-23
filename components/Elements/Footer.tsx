import Link from "next/link";
import { HiEnvelopeOpen } from "react-icons/hi2";
import Logo from "@components/Icons/Logo"
import { BlogCategory, BlogPost } from "@localTypes/schema";
import { social } from "@data/meta";
import FooterCategories from "./FooterCategories";
import FooterSocials from "./FooterSocials";
import FooterRecentPosts from "./FooterRecentPosts";

interface FooterProps {
  categories: BlogCategory[]
  blogs: BlogPost[]
}

export default function Footer({ categories, blogs }:FooterProps) {
  return (
    <footer 
      aria-label="Site Footer" 
      className="mt-8 tracking-wide leading-6 align-baseline break-words border-solid border-x-0 border-y lg:border-b-0"
      style={{ borderWidth: '0px', textRendering: 'optimizeLegibility'}}
    >
      <div className="max-w-screen-xl xl:max-w-[1400px] sm:px-5 md:px-[25px] hidden mx-auto md:block md:py-0 px-8 md:max-w-3xl lg:max-w-5xl">
        <div className="flex flex-row flex-wrap -ml-5 -mr-5">
          <div className="pb-6 w-1/2 xl:w-1/4 mb-10 b-0 bg-none pt-16 relative text-xs py-8 px-6 z-2 float-left">
            <div className="mb-5">
              <Link href="/" className="text-4xl">
                <Logo width={170} height={45} style={{ display: "block" }} className="max-w-full h-auto" />
              </Link>
            </div>
            <div className="-mt-2">
              <p className="leading-5">Lorem ipsum dolor sit amet.</p>
              <p className="leading-5">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="clear-both" />
          </div>
          <div className="w-1/2 -mt-8 xl:w-1/4">
            <FooterRecentPosts blogs={blogs} />
          </div>
          <div className="pb-6 w-1/2 xl:w-1/4 mb-10 b-0 bg-none pt-16 relative text-xs py-8 px-6 z-2 float-left xl:-mt-8 xl:pt-0">
            <FooterCategories categories={categories} />
          </div>
          <div className="pb-6 w-1/2 xl:w-1/4 mb-10 b-0 bg-none pt-16 relative text-xs py-8 px-6 z-2 float-left xl:-mt-8 xl:pt-0">
            <FooterSocials />
          </div>
        </div>
      </div>
      <div className="px-5 max-w-[1400px] mx-auto">
        <div className="py-5 text-center relative z-2 text-sm font-semibold">
          <div className="max-w-[600px] py-0 text-center mx-auto">
            <form className="mt-5 relative z-4">
              <h4 className="text-2xl max-w-xs mx-auto font-bold text-emerald-800" style={{ lineHeight: '1.2'}}>Subscribe to the Newsletter</h4>
              <div className="max-w-lg block w-auto my-5 mx-auto relative">
                <input className="m-0 py-4 px-5 pr-28 text-xs h-[60px] tracking-wider rounded-full w-full border focus:border-emerald-900" />
                <div className="h-[60px] py-2 m-0 inline-block align-middle hover:cursor-pointer">
                  <button className="absolute text-xs py-0 px-5 right-4 h-10 inline-block tracking-wider z-2 rounded-full border-2 border-solid">Submit</button>
                </div>
              </div>
              {/* success message */}
              <p className="opacity-0 h-0 p-0 text-xs align-middle leading-9">
                Email successfully submitted! Check email for confirmation
                <HiEnvelopeOpen className="ml-2 text-emerald-900 text-xl inline-block antialiased align-middle" /> 
              </p>
              {/* subscribe icon */}
              <span className="right-[90%] top-1 absolute -mr-[70px] w-32 h-24 bg-contain" style={{ background: "url('/static/images/newslettersub.svg') no-repeat left top"}} />
            </form>
            {/* description */}
            <p className="text-xs font-extralight max-w-sm my-0 mx-auto">Subscribe to the email newsletter and unlock access to <span className="font-semibold">members-only</span> content and <span className="font-semibold">exclusive updates</span>.</p>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="mb-5 max-w-md pl-5 pr-5 text-center mx-auto">
        <ul className="m-0 p-0 b-0 align-baseline">
          <li className="inline ml-2" key="terms">
            <Link href="#">Terms & Conditions</Link>
          </li>
          <li className="inline ml-2" key="faq">
            <span className="inline-block mr-2.5 bg-black h-2.5 w-[2px] -mt-[1px] align-middle opacity-30" />
            <Link href="#">FAQ</Link>
          </li>
          <li className="inline ml-2" key="privacy">
            <span className="inline-block mr-2.5 bg-black h-2.5 w-[2px] -mt-[1px] align-middle opacity-30" />
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <p className="text-center mb-5 text-xs max-w-sm mx-auto">Designed & developed by <Link className="text-emerald-700 font-semibold tracking-wider" href={`https://github.com/${social.github}`} target="_blank">@meaganewaller</Link> using <span className="font-semibold">Next.JS</span>, <span className="font-semibold">Notion</span>, and <span className="font-semibold">Tailwind.CSS</span>.</p>
    </footer>
  )
}
