import "@fontsource/prata";
import "@fontsource/dm-sans";
import "@fontsource/ibm-plex-mono";
//import 'focus-visible';
import { ThemeProvider } from "next-themes";
import React, { useEffect, useRef } from 'react';
import Script from "next/script";

import '../styles/tailwind.css';
import '../styles/index.css';
import '../styles/app.css';
import '../styles/prism.css';

import type { AppProps } from "next/app";
import ScrollIndicator from "@components/ScrollIndicator";

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <ThemeProvider attribute="class">
        <div className={`font-sans subpixel-antialiased`}>
          <div className="relative">
            <main>
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
