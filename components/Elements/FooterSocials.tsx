import Link from 'next/link'
import { social } from '@data/meta'
import { FaFacebookF, FaTwitter, FaGithub, FaRss } from "react-icons/fa"

export default function FooterSocials() {
  return (
    <div className="sm:px-5 md:px-[25px] xl:pt-0 xl:mt-0 lg:py-28 hidden mx-auto md:block md:py-5 px-8 md:max-w-3xl lg:max-w-5xl align-baseline pb-6 mb-10 pt-14">
      <h4 className="font-mono italic xl:relative tracking-wider relative left-6 -top-4 z-2 py-1 px-6 border border-solid border-emerald-900 rounded-full text-lg bg-white leading-relaxed mb-7 inline-block">
        Stay Updated
      </h4>
      <div className="p-0 m-0 leading-6 align-baseline border-0" style={{textRendering: 'optimizeLegibility'}}>
        <Link 
          href={`htttps://facebook.com/${social.facebookUrl}`} 
          className="block p-0 mx-0 mt-0 mb-2 align-baseline border-0 cursor-pointer" 
          target="_blank" 
          rel="nofollow noopener" 
          style={{textRendering: 'optimizeLegibility', textDecoration: 'none', outline: '0px', transition: 'all 300ms ease 0s'}}
        >
          <span 
            className="inline-block p-0 m-0 w-10 h-10 text-xl text-center text-blue-600 align-middle bg-white border border-solid border-zinc-600" 
            style={{textRendering: 'optimizeLegibility', borderRadius: '50%', lineHeight: '42px', transition: 'all 0.3s cubic-bezier(0.5, 2.5, 0.7, 0.7) 0s'}}
          >
            <FaFacebookF className="inline-block p-0 m-0 not-italic leading-none align-baseline border-0 " />
          </span>
          <span 
            className="px-0 pt-0 pb-1 my-0 mr-0 ml-2 font-sans text-lg font-bold leading-8 align-middle bg-no-repeat border-0" 
            style={{textRendering: 'optimizeLegibility', backgroundSize: '0% 4%', transition: 'all 300ms ease 0s'}}
          >
            Facebook
          </span>
        </Link>
        <Link 
          href={`https://twitter.com/${social.twitterUsername}`} 
          className="block p-0 mx-0 mt-0 mb-2 align-baseline border-0 cursor-pointer" 
          target="_blank" rel="nofollow noopener" 
          style={{textRendering: 'optimizeLegibility', textDecoration: 'none', outline: '0px', transition: 'all 300ms ease 0s'}}
        >
          <span 
            className="inline-block p-0 m-0 w-10 h-10 text-xl text-center align-middle bg-white border border-solid border-zinc-600 text-sky-500" 
            style={{textRendering: 'optimizeLegibility', borderRadius: '50%', lineHeight: '42px', transition: 'all 0.3s cubic-bezier(0.5, 2.5, 0.7, 0.7) 0s'}}
          >
            <FaTwitter className="inline-block p-0 m-0 not-italic leading-none align-baseline border-0 " />
          </span>
          <span className="px-0 pt-0 pb-1 my-0 mr-0 ml-2 font-sans text-lg font-bold leading-8 align-middle bg-no-repeat border-0" style={{textRendering: 'optimizeLegibility', backgroundSize: '0% 4%', transition: 'all 300ms ease 0s'}}>Twitter</span>
        </Link>
        <Link 
          href={`https://www.github.com/${social.github.username}`} 
          className="block p-0 mx-0 mt-0 mb-2 align-baseline border-0 cursor-pointer" 
          target="_blank" 
          style={{textRendering: 'optimizeLegibility', textDecoration: 'none', outline: '0px', transition: 'all 300ms ease 0s'}}
        >
          <span className="inline-block p-0 m-0 w-10 h-10 text-xl text-center text-black-600 align-middle bg-white border border-solid border-zinc-600" style={{textRendering: 'optimizeLegibility', borderRadius: '50%', lineHeight: '42px', transition: 'all 0.3s cubic-bezier(0.5, 2.5, 0.7, 0.7) 0s'}}><FaGithub className="inline-block p-0 m-0 not-italic leading-none align-baseline border-0 " /></span>
          <span className="px-0 pt-0 pb-1 my-0 mr-0 ml-2 font-sans text-lg font-bold leading-8 align-middle bg-no-repeat border-0" style={{textRendering: 'optimizeLegibility', backgroundSize: '0% 4%', transition: 'all 300ms ease 0s'}}>GitHub</span>
        </Link>
        <Link 
          href="#"
          className="block p-0 mx-0 mt-0 mb-2 align-baseline border-0 cursor-pointer" 
          target="_blank" 
          style={{textRendering: 'optimizeLegibility', textDecoration: 'none', outline: '0px', transition: 'all 300ms ease 0s'}}
        >
          <span className="inline-block p-0 m-0 w-10 h-10 text-xl text-center text-orange align-middle bg-white border border-solid border-zinc-600" style={{textRendering: 'optimizeLegibility', borderRadius: '50%', lineHeight: '42px', transition: 'all 0.3s cubic-bezier(0.5, 2.5, 0.7, 0.7) 0s'}}><FaRss className="inline-block p-0 m-0 not-italic leading-none align-baseline border-0 " /></span>
          <span className="px-0 pt-0 pb-1 my-0 mr-0 ml-2 font-sans text-lg font-bold leading-8 align-middle bg-no-repeat border-0" style={{textRendering: 'optimizeLegibility', backgroundSize: '0% 4%', transition: 'all 300ms ease 0s'}}>RSS</span>
        </Link>
      </div>
    </div>
  )
}

