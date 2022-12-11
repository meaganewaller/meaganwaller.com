import { ThemeProvider } from 'next-themes'
import '../styles/tailwind.css'
import '../styles/app.css'
import '../styles/prism.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <ThemeProvider attribute='class' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
