import { useState, useEffect } from "react";

export function useSendWindowToTop(id: string) {
  // Initialize state with undefined active so server and client renders match
  const [activeWindow, setActiveWindow] = useState(undefined);

  useEffect(() => {
    const elementId = `window-${id}`;
    const element = document.getElementById(elementId);
    element.classList.remove("window_inactive");
    setActiveWindow(true);
    const otherWindows = document.querySelectorAll(`[data-another-window]:not(#${elementId})`);
    otherWindows.forEach((el) => {
      el.classList.add("window_inactive");
    });
    const maxZIndex = Array.from(otherWindows).reduce((acc, elem: any) => Math.max(elem?.style.zIndex, acc), 0);
    if (element) element.style.zIndex = `${maxZIndex + 1}`;
  }, [id]);
  return activeWindow;
}
