import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import clsx from "clsx";

interface Props {
  active: boolean;
  title: string;
  x: number;
  y: number;
  width?: string;
  height?: string;
  zIndex?: string;
  classList?: string;
  children: React.ReactNode;
}

export const DraggableWindow = ({ active, title, x, y, width, height, zIndex, classList, children }: Props) => {
  const shareRef = useRef<HTMLInputElement>();
  const randomId = Math.random().toString(36).replace(/\.|\d/g, "");
  const [activeWindow, setActiveWindow] = useState(active);

  function sendElementToTop() {
    const elementId = `window-${randomId}`;
    const element = document.getElementById(elementId);
    element.classList.remove("window_inactive");
    setActiveWindow(true);
    const otherWindows = document.querySelectorAll(`[data-another-window]:not(#${elementId})`);
    otherWindows.forEach((el) => {
      el.classList.add("window_inactive");
    });
    const maxZIndex = Array.from(otherWindows).reduce((acc, elem: any) => Math.max(elem?.style.zIndex, acc), 0);
    if (element) element.style.zIndex = `${maxZIndex + 1}`;
  }

  return (
    <Draggable nodeRef={shareRef} onMouseDown={sendElementToTop}>
      <div
        ref={shareRef}
        onDrag={sendElementToTop}
        onClick={sendElementToTop}
        data-another-window={true}
        key={`window-${randomId}`}
        id={`window-${randomId}`}
        className={clsx(
          "absolute grid grid-rows-[21px_auto_4px] grid-cols-[4px_auto_4px] border border-solid border-[#000] bg-[#c0c0c0] shadow-[inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c]",
          { window_inactive: !active },
          { [classList]: classList }
        )}
        style={{
          top: y,
          left: x,
          width: width,
          height: height,
          zIndex: zIndex,
        }}
      >
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center select-none mr-[1px] handle">
          <button className="relative block w-[11px] h-[11px] p-0 border border-solid border-[#000] shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c] bg-windowTitleBarButton active:bg-windowTitleBarButtonActive" />
          <div className="flex flex-1 items-center font-bold text-black before:content-[''] after:flex-1 before:flex-1 after:h-[12px] before:h-[12px] after:bg-windowTitleBar before:bg-windowTitleBar after:mx-[5px] before:mx-[5px]">
            {title}
          </div>
          <button className="relative block w-[11px] h-[11px] p-0 border border-solid border-[#000] shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c] bg-windowTitleBarButton active:bg-windowTitleBarButtonActive after:content-[''] after:absolute after:top-0 after:left-0 after:w-[5px] after:h-[5px] after:border-bottom after:border-solid after:border-black after:border-right" />
          <button className="relative block w-[11px] h-[11px] p-0 border border-solid border-[#000] shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c] bg-windowTitleBarButton active:bg-windowTitleBarButtonActive ml-[5px] after:content-[''] after:absolute after:top-[3px] after:left-0 after:right-0 after:h-[1px] after:border-top after:border-solid after:border-black after:border-bottom" />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-white border border-solid border-black shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c] overflow-x-hidden overflow-y-auto">
          {children}
        </div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 cursor-[ew-resize]" />
        <div className="col-start-3 col-end-4 row-start-1 row-end-4 cursor-[ew-resize]" />
        <div className="col-start-1 col-end-4 row-start-3 row-end-4 cursor-[ns-resize]" />
      </div>
    </Draggable>
  );
};
//         <div className="window-titlebar handle">
//           <button className="window-button window-button-close" />
//           <div className="window-title">{title}</div>
//           <button className="window-button window-button_maximize" />
//           <button className="window-button window-button_shade" />
//         </div>
//         <div className="window-content">{children}</div>
//         <div className="window-border_left" />
//         <div className="window-border_right" />
//         <div className="window-border_bottom" />
//     </Draggable>
//       </div>
//   );
// };

export default DraggableWindow;
