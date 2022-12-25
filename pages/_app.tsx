import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { ThemeProvider } from 'next-themes'

import nProgress from "nprogress"

import '../styles/input.css'
import '../styles/app.css'

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

const MyApp = ({ Component, pageProps, router }: AppProps) => { 
  process.env.NODE_ENV === "production" ? null : null
  return (
    <>
      <ThemeProvider attribute="class">
        <main className="font-primary">
          <Component {...pageProps} key={router.route} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default MyApp
