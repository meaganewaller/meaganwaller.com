import { useState, useEffect } from "react";

export function useSetActiveWindow(id: string, active: boolean) {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    function sendElementToTop() {
      const elementId = `window-${id}`;
      const element = document.getElementById(elementId);
      element.classList.remove("window_inactive");
      setIsActive(true);
      const otherWindows = document.querySelectorAll(`[data-another-window]:not(#${elementId})`);
      otherWindows.forEach((el) => {
        el.classList.add("window_inactive");
      });
      const maxZIndex = Array.from(otherWindows).reduce((acc, elem: any) => Math.max(elem?.style.zIndex, acc), 0);
      if (element) element.style.zIndex = `${maxZIndex + 1}`;
    }

    sendElementToTop();
  }, [id, active]);
  return isActive;
}
