import React from 'react'

type Props = {
  title: string
}

export default function LandingSectionTitle({ title }: Props) {
  return (
    <div 
      className="mx-auto pt-12 text-center opacity-100 px-6" 
      style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '990px'}}
    >
      <div className="inline-block justify-center items-center py-1 px-3 mb-4 text-xs font-semibold tracking-wider leading-4 uppercase border dark:bg-secondary dark:text-white dark:border-white border-solid" style={{borderRadius: '44px'}}>
        <div className="tracking-wide uppercase">{title}</div>
      </div>
    </div>
  )
}
