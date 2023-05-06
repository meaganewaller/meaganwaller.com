import { useEffect } from 'react'

export function useMarqueeTitle(text: string) {
  useEffect(() => {
    const space = " "
    const speed = "60"
    let pos = 0

    function scroll() {
      document.title = text.substring(pos, text.length) +
        space +
        text.substring(0, pos)
      pos++
      if (pos > text.length) pos = 0
      window.setTimeout("scroll()", speed)
    }

    scroll()
  }, [])
}
