import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { SiteLayout } from '@components/SiteLayout'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  );
}

export default MyApp
