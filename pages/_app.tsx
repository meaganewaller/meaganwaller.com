import { ThemeProvider } from 'next-themes'
import { Router } from 'next/router'

import nProgress from "nprogress"

import '../styles/tailwind.css'
import '../styles/app.css'
import '../styles/prism.css'

import type { AppProps } from 'next/app'

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

const MyApp = ({ Component, pageProps, router }: AppProps) => { 
  process.env.NODE_ENV === "production" ? null : null
  return (
    <>
      <ThemeProvider attribute='class' themes={['light', 'dark']} defaultTheme='system'>
        <main className="font-sans">
          <Component {...pageProps} key={router.route} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default MyApp
