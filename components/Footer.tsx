import { footer } from "@data/meta";
import Link from "next/link";
import Logo from "@components/Icons/Logo"
import { RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { FaArrowRight, FaCodepen, FaRss, FaTwitter } from "react-icons/fa";

function NewsletterSection() {
  return (
    <div id="newsletter">
      <h6>{`A newsletter you'll`} <em>actually</em> open</h6>
      <div className="mt-4 max-w-md">
        <p>
          Subscribe to the newsletter to stay up to date with articles, guides, courses, and more!

          <Link href="/subscribe" className="dark:text-secondary text-primary underline hover:text-primary-lighter dark:hover:text-secondary-lighter focus:text-primary-lighter dark:focus:text-secondary-lighter">
            {`Learn more`}{' '}
            <FaArrowRight className="inline-block w-6 h-full" width={32} height={32} />
          </Link>
        </p>
      </div>

      <div className="mt-8">
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer 
      aria-label="Site Footer" 
      className="border-t dark:border-secondary-light border-primary pb-16 pt-48"
    >
      <div className="relative mx-20">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2">
            <div>
              <Logo width={200} height={35} />
              <p className="text-secondary mt-6 max-w-md text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incident consequuntur amet culpa cum itaque neque. </p>
              <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
                <div className="flex gap-4">
                  <Link href="https://github.com/meaganewaller" className="dark:text-secondary text-primary hover:text-primary-lighter focus:outline-none dark:hover:text-secondary-lighter focus:text-primary-lighter dark:focus:text-secondary-lighter">
                    <RxGithubLogo width={32} height={32} className="w-6 h-full"/>
                  </Link>
                  <Link href="https://twitter.com/meaganewaller" className="dark:text-secondary text-primary hover:text-primary-lighter focus:outline-none dark:hover:text-secondary-lighter focus:text-primary-lighter dark:focus:text-secondary-lighter">
                    <FaTwitter width={32} height={32} className="w-6 h-full"/>
                  </Link>
                  <Link href="#" className="dark:text-secondary text-primary hover:text-primary-lighter focus:outline-none dark:hover:text-secondary-lighter focus:text-primary-lighter dark:focus:text-secondary-lighter">
                    <FaCodepen width={32} height={32} className="w-6 h-full"/>
                  </Link>
                  <Link href="#" className="dark:text-secondary text-primary hover:text-primary-lighter focus:outline-none dark:hover:text-secondary-lighter focus:text-primary-lighter dark:focus:text-secondary-lighter">
                    <FaRss width={32} height={32} className="w-6 h-full"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // {/*   <div className="px-4 py-12 border-t-2 border-solid border-primary-lighter"> */}
    // {/*     <div className="flex items-center justify-center text-center flex-col"> */}
    // {/*       <div className="flex justify-center"> */}
    // {/*         <Logo width={200} height={35} /> */}
    // {/*       </div> */}
    // {/*       <p className="mx-auto mt-4 max-w-lg text-center leading-relaxed"> */}
    // {/*         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt */}
    // {/*         consequuntur amet culpa cum itaque neque. */}
    // {/*       </p> */}
    // {/*     </div> */}

    // {/*     <div className="mt-8 grid border-t grid-cols-1 gap-8 pt-8 mx-auto max-w-lg"> */}
    // {/*       <div className="flex items-start justify-around"> */}
    // {/*         <div className="text-left"> */}
    // {/*           <p className="text-lg font-medium">Site</p> */}
    // {/*           <nav aria-label="Footer Site Nav" className="mt-5"> */}
    // {/*             <ul className="space-y-3 text-sm"> */}
    // {/*               {footer.categories[0].links.map((link: FooterCategoryLink, i: number) => ( */}
    // {/*                 <li key={`${link.title} + {i}`}> */}
    // {/*                   <Link  */}
    // {/*                     className="transition no-underline hover:text-primary-darker hover:underline hover:underline-offset-1" */}
    // {/*                     href={link.href} */}
    // {/*                   > */}
    // {/*                     {link.title} */}
    // {/*                   </Link> */}
    // {/*                 </li> */}
    // {/*               ))} */}
    // {/*             </ul> */}
    // {/*           </nav> */}
    // {/*         </div> */}
    // {/*         <div className="text-left"> */}
    // {/*           <p className="text-lg font-medium">Topics</p> */}
    // {/*           <nav aria-label="Footer Topics Nav" className="mt-5"> */}
    // {/*             <ul className="space-y-3 text-sm"> */}
    // {/*               {footer.categories[1].links.map((link: FooterCategoryLink, i: number) => ( */}
    // {/*                 <li key={`${link.title} + {i}`}> */}
    // {/*                   <Link  */}
    // {/*                     className="transition" */}
    // {/*                     href={link.href} */}
    // {/*                   > */}
    // {/*                     {link.title} */}
    // {/*                   </Link> */}
    // {/*                 </li> */}
    // {/*               ))} */}
    // {/*             </ul> */}
    // {/*           </nav> */}
    // {/*         </div> */}
    // {/*         <div className="text-center sm:text-left"> */}
    // {/*           <p className="text-lg font-medium">Meta</p> */}
    // {/*           <nav aria-label="Footer Meta Nav" className="mt-8"> */}
    // {/*             <ul className="space-y-4 text-sm"> */}
    // {/*               {footer.categories[2].links.map((link: FooterCategoryLink, i: number) => ( */}
    // {/*                 <li key={`${link.title} + {i}`}> */}
    // {/*                   <Link  */}
    // {/*                     className="transition" */}
    // {/*                     href={link.href} */}
    // {/*                   > */}
    // {/*                     {link.title} */}
    // {/*                   </Link> */}
    // {/*                 </li> */}
    // {/*               ))} */}
    // {/*             </ul> */}
    // {/*           </nav> */}
    // {/*         </div> */}
    // {/*         <div className="text-center sm:text-left"> */}
    // {/*           <p className="text-lg font-medium">Legal</p> */}
    // {/*           <nav aria-label="Footer Helpful Nav" className="mt-8"> */}
    // {/*             <ul className="space-y-4 text-sm"> */}
    // {/*               {footer.categories[3].links.map((link: FooterCategoryLink, i: number) => ( */}
    // {/*                 <li key={`${link.title} + {i}`}> */}
    // {/*                   <Link  */}
    // {/*                     className="transition" */}
    // {/*                     href={link.href} */}
    // {/*                   > */}
    // {/*                     {link.title} */}
    // {/*                   </Link> */}
    // {/*                 </li> */}
    // {/*               ))} */}
    // {/*             </ul> */}
    // {/*           </nav> */}
    // {/*         </div> */}
    // {/*       </div> */}
    // {/*       <div className="text-center sm:text-left md:col-span-4 lg:col-span-2"> */}
    // {/*         <p className="text-lg font-medium">Stay in Touch</p> */}
    // {/*         <div className="mx-auto mt-8 max-w-lg sm:ml-0"> */}
    // {/*           <p className="text-center leading-relaxed sm:text-left"> */}
    // {/*             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum */}
    // {/*             id, iure consectetur et error hic! */}
    // {/*           </p> */}
    // {/*           <form className="mt-4"> */}
    // {/*             <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"> */}
    // {/*               <label htmlFor="email" className="sr-only"> */}
    // {/*                 Email */}
    // {/*               </label> */}
    // {/*               <input */}
    // {/*                 className="w-full rounded-sm px-6 py-3 shadow-sm" */}
    // {/*                 type="email" */}
    // {/*                 placeholder="Enter your email" */}
    // {/*                 /> */}
    // {/*               <button */}
    // {/*                 className="block rounded-sm px-8 py-3 font-medium transition" */}
    // {/*                 type="submit" */}
    // {/*               > */}
    // {/*                 Subscribe */}
    // {/*               </button> */}
    // {/*             </div> */}
    // {/*           </form> */}
    // {/*         </div> */}
    // {/*       </div> */}
    // {/*     </div> */}
    // {/*     <div className="mt-16 border-t pt-6 sm:flex sm:items-center sm:justify-between"> */}
    // {/*       <p className="text-center text-sm sm:text-left"> */}
    // {/*         Copyright © 2022. All rights reserved. */}
    // {/*       </p> */}
    // {/*       <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start"> */}
    // {/*         {footer.categories[4].links.map((link: FooterCategoryLink, i: number) => ( */}
    // {/*           <li key={link.title + i}> */}
    // {/*             <Link  */}
    // {/*               rel="noreferrer" */}
    // {/*               target="_blank" */}
    // {/*               className="transition" */}
    // {/*               href={link.href} */}
    // {/*             > */}
    // {/*               <span className="sr-only">{link.title}</span> */}
    // {/*               <link.icon className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" /> */}
    // {/*             </Link> */}
    // {/*           </li> */}
    // {/*         ))} */}
    // {/*       </ul> */}
    // {/*     </div> */}
    // {/*   </div> */}
    // {/* </footer> */}
  );
}

type FooterCategoryLink = {
  title: string;
  href: string;
  icon?: Function;
}
