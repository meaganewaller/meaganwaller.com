import React, { useEffect } from 'react';
import MenuBar from '@components/Elements/MenuBar';
import Window from '@components/Elements/Window';
import { useWindowSize } from '@lib/hooks/useWindowSize';
import SubscribeForm from '@components/Subscribe';
import Broadcasts from '@components/Elements/Broadcasts';

export default function About() {
  const size = useWindowSize();
  useEffect(() => {
    import('@components/Elements/Broadcasts');
  }, []);

  return (
    <div className="bg-desktopWallpaper2">
      <MenuBar />

      <Window
        active={true}
        title="delivered straight to your inbox"
        x={size.width / 2.45}
        y={size.height / 12}
        zIndex="2"
        width={`${size.width * 0.55}px`}
      >
        <div className="flex p-5 place-content-center flex-col">
          <div className="flex place-content-center pb-4">
            <SubscribeForm formId={process.env.CONVERTKIT_LANDING_FORM_ID} />
          </div>
        </div>
      </Window>

      <Window active={false} title="past issues" x={size.width / 8} y={size.height / 5} zIndex="0" width="300px">
        <div className="flex p-5 place-content-center flex-col">
          <div className="flex place-content-center pb-4">
            <Broadcasts />
          </div>
        </div>
      </Window>

      <Window active={false} title="what the readers are saying" x={size.width / 5} y={size.height / 1.5} zIndex="0">
        <div className="flex py-8 place-content-center flex-row font-extra">
          <div className="inline-block px-3">
            <div className="relative w-56 animate-bounce">
              <div className="bg-primary p-3 rounded-2xl">
                <p className="text-base p-1 text-floor">It&apos;s certaintly a newsletter that arrives in my e-mail inbox!</p>
              </div>
              <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-primary relative -z-1 -top-3 left-40 rotate-[22deg]" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="relative w-56 animate-[bounce_4s_infinite]">
              <div className="bg-primary p-3 rounded-2xl">
                <p className="text-base p-1 text-floor">Published so infrequently you&apos;ll forget you&apos;re subscribed to it</p>
              </div>
              <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-primary relative -z-1 -top-3 left-40 rotate-[22deg]" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="relative w-56 animate-[bounce_3s_infinite]">
              <div className="bg-primary p-3 rounded-2xl">
                <p className="text-base p-1 text-floor">Is the form to submit typos I found on your website?</p>
              </div>
              <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-primary relative -z-1 -top-3 left-40 rotate-[22deg]" />
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}
