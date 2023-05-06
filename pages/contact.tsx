import React from 'react'
import MenuBar from '@components/Elements/MenuBar'
import Window from '@components/Elements/Window'
import { useWindowSize } from '@lib/hooks/useWindowSize';

export default function Contact() {
  const size = useWindowSize();

  return (
    <div className="h-screen">
      <MenuBar />
      <Window title="Let&apos;s Connect" active={false} x={size.width * .5 / 2} y={size.height / 10} zIndex="1" width="500px" height="250px">
        <ul className="content">
          <li className="content__item">
            <button className="button button--kari">
              <span>Twitter</span>
              <div className="marquee" aria-hidden={true}>
                <div
                  className="marquee__inner"
                >
                  <span>Follow me</span>
                  <span>Follow me</span>
                  <span>Follow me</span>
                  <span>Follow me</span>
                </div>
              </div>
            </button>
          </li>
          <li className="content__item">
            <button className="button button--hati"><span>LinkedIn</span></button>
          </li>
          <li className="content__item">
            <button className="button button--hyperion"><span>GitHub</span></button>
          </li>

          <li className="content__item">
            <button className="button button--narvi"><span><span>Email</span></span></button>
          </li>

          <li className="content__item">
            <button className="button button--pandora"><span>Dev.to</span></button>
          </li>

          <li className="content__item">
            <button className="button button--pallene">
              Polywork
            </button>
          </li>
        </ul>
      </Window>
    </div>
  )

}
