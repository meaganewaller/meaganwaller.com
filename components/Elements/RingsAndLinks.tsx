import Image from 'next/image';
import React from 'react';
import WakaTime from './Wakatime';

export default function RingsAndLinks() {
  return (
    <div className="w-2/6 p-2 h-full">
      <div className="window !relative">
        <div className="window-titlebar handle">
          <button className="window-button window-button-close" />
          <div className="window-title">webrings & buttons</div>
          <button className="window-button window-button_maximize" />
          <button className="window-button window-button_shade" />
        </div>

        <div className="window-content p-3">
          <aside className="my-10 grid gap-4 content-start">
            <webring-devblog site="https://meaganwaller.com" class="justify-self-center max-h-28 max-w-full" />
            <div className="text-center">
              <Image src="/static/images/blinkies/meaganwaller.gif" alt="meaganwaller.com animated graphic" width="150" height="20" className="inline-block" />
              <Image src="/static/images/blinkies/aries.gif" alt="Aries Animated Graphic" width="68" height="28" className="inline-block" />
              <Image src="/static/images/blinkies/bookmark.gif" alt="Bookmark this Page GIF" width="88" height="31" className="inline-block" />
              <Image src="/static/images/blinkies/bestviewed.gif" alt="This Page Best Viewed on a Computer" width="88" height="31" className="inline-block" />
              <Image src="/static/images/blinkies/madewithmac.gif" alt="This website was made with a Mac" width="88" height="31" className="inline-block" />
              <Image src="/static/images/blinkies/online.gif" alt="Forever Online Animated GIF" width="88" height="31" className="inline-block" />
              <Image src="/static/images/blinkies/oldweb.png" alt="I love old web" width="99" height="55" className="inline-block" />
              <Image src="/static/images/blinkies/trustme.gif" alt="Trust Me, I'm Good With Computer" width="129" height="38" className="inline-block" />
              <Image src="/static/images/blinkies/www.gif" alt="World Wide Web Badge Graphic" width="91" height="100" className="inline-block" />
            </div>
          </aside>
        </div>
      </div>
      <div className="window !relative mt-10">
        <div className="window-titlebar handle">
          <button className="window-button window-button-close" />
          <div className="window-title">by the numbers</div>
          <button className="window-button window-button_maximize" />
          <button className="window-button window-button_shade" />
        </div>

        <div className="window-content p-3">
          <aside className="my-10 grid gap-4 content-start">
            <WakaTime />
          </aside>
        </div>
      </div>
    </div>
  )
}
