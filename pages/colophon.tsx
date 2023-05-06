import React from 'react'
import MenuBar from '@components/Elements/MenuBar'
import Window from '@components/Elements/Window'
import Image from "next/image"
import Link from "next/link"
import { useWindowSize } from '@lib/hooks/useWindowSize'

export default function Colophon() {
  const size = useWindowSize();
  return (
    <div className="bg-desktopWallpaper2">
      <MenuBar />

      <Window
        active={true}
        title="proudly powered by these tools"
        x={ (size.width * .5) / 2}
        y={size.height/8}
        zIndex="2"
        width={`${size.width * 0.55}px`}
      >
        <div className="flex p-5 place-content-center flex-col bg-accentFirst-lighter/30">
          <div className="flex flex-col pb-4 place-content-center text-center">
            <h1 className="text-4xl font-extra italic text-accentFirst/50 pb-4">resources</h1>
            <Image src="/static/images/gifs/stardivider.webp" width={270} height={15} className="mx-auto" alt="Animated stars divider" />
            <div className="mt-6 border-t border-accentFirst font-extra">
              <dl className="divide-y divide-accentFirst">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Framework</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0">
                    <Link href="https://nextjs.org" target="_blank">Next.js</Link>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Styling</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0">
                    <Link href="https://tailwindcss.com" target="_blank">TailwindCSS</Link></dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Content Management</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0"><Link href="https://developers.notion.com/" target="_blank">Notion API</Link></dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Database</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0">
                    <Link href="https://supabase.com/" target="_blank">Supabase</Link></dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Newsletter</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0"><Link href="https://convertkit.com/" target="_blank">Convertkit</Link></dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-accentFirst">Deployment</dt>
                  <dd className="mt-1 text-sm leading-6 text-accentFirst-light sm:col-span-2 sm:mt-0"><Link href="https://vercel.com/" target="_blank">Vercel</Link></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Window>
    </div>
  )
}
