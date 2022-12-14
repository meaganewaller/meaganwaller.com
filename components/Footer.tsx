import { footer, meta } from "@data/meta";
import Link from "next/link";
import Logo from "@components/Icons/Logo"
import SvgComponent from "./Icons/Circle";

export function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white mx-auto max-w-[1440px]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Logo width={200} height={35} />
          </div>
          <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:ml-0 sm:text-left lg:mr-0 lg:mt-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Site</p>
            <nav aria-label="Footer Site Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                {footer.categories[0].links.map((link: FooterCategoryLink) => (
                  <li>
                    <Link 
                      className="text-emerald-900 transition hover:text-emerald-900/75"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Topics</p>
            <nav aria-label="Footer Topics Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                {footer.categories[1].links.map((link: FooterCategoryLink) => (
                  <li>
                    <Link 
                      className="text-emerald-900 transition hover:text-emerald-900/75"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Meta</p>
            <nav aria-label="Footer Meta Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                {footer.categories[2].links.map((link: FooterCategoryLink) => (
                  <li>
                    <Link 
                      className="text-emerald-900 transition hover:text-emerald-900/75"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Legal</p>
            <nav aria-label="Footer Helpful Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                {footer.categories[3].links.map((link: FooterCategoryLink) => (
                  <li>
                    <Link 
                      className="text-emerald-900 transition hover:text-emerald-900/75"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-gray-900">Stay in Touch</p>
            <div className="mx-auto mt-8 max-w-md sm:ml-0">
              <p className="text-center leading-relaxed text-gray-500 sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                id, iure consectetur et error hic!
              </p>
              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    className="w-full rounded-sm border-gray-200 px-6 py-3 shadow-sm focus:border-yellow-green-500"
                    type="email"
                    placeholder="Enter your email"
                    />
                  <button
                    className="block rounded-sm bg-emerald-900 px-8 py-3 font-medium text-yellow-green-500 transition hover:bg-emerald-700 hover:text-yellow-green-300"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright © 2022. All rights reserved.
          </p>
          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            {footer.categories[4].links.map((link: FooterCategoryLink) => (
              <li>
                <Link 
                  rel="noreferrer"
                  target="_blank"
                  className="text-emerald-900 transition hover:text-emerald-900/75"
                  href={link.href}
                >
                  <span className="sr-only">{link.title}</span>
                  <link.icon className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

type FooterCategoryLink = {
  title: string;
  href: string;
  icon?: Function;
}
