import clsx from 'clsx'
import {
  HiOutlineCommandLine
} from 'react-icons/hi2'

import { 
  SiReact,
  SiRuby,
  SiGit,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'


const features = [
  {
    name: 'Ruby & Ruby on Rails',
    description: 'Leverage the power of Ruby and Ruby on Rails to build robust and scalable web applications',
    icon: SiRuby,
    color: 'bg-red-100',
  },
  {
    name: 'Developer Environment',
    description: 'Take control of your environment with tools to accelerate your workflow and turn you into a power user.',
    icon: HiOutlineCommandLine,
    color: 'bg-goldenrod-200',
  },
  {
    name: 'Git',
    description: 'All the git-foo you need to manage personal, client, and work development flows.',
    icon: SiGit,
    color: 'bg-sky-100',
  },
  {
    name: 'React',
    description: 'Learn the JavaScript library for building UIs that is used by top tech companies.',
    icon: SiReact,
    color: 'bg-pink-100',
  },
  {
    name: 'Typescript',
    description: 'Shore up your JavaScript by learning TypeScript and take advantage of the explicit type system',
    icon: SiTypescript,
    color: 'bg-medium-purple-100',
  },
  {
    name: 'Tailwind CSS',
    description: 'Quickly build beautiful websites with this utility-first CSS framework',
    icon: SiTailwindcss,
    color: 'bg-lime-100',
  },
]
export default function Features() {
  return (

    <div className="relative mx-auto w-full leading-5 text-black py-24 sm:py-32 lg:py-40" style={{maxWidth: '1140px'}}>
      <div 
        className="mx-auto mb-12 text-center opacity-100 px-6"
        style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '990px'}}
      >
        <div className="inline-block justify-center items-center py-1 px-3 mb-4 text-xs font-semibold tracking-wider leading-4 uppercase bg-red-200 border border-black border-solid" style={{borderRadius: '44px'}}>
          <div className="tracking-wide uppercase">Categories</div>
        </div>
        <h2 className="mt-0 mb-4 font-sans text-5xl font-medium tracking-tight" style={{lineHeight: '1.2'}}>Whatcha lookin for?</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog posts, tutorials, guides, snippets, and more.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 leading-5">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="flex flex-col justify-center items-center py-10 px-8 h-full leading-5 text-center text-black bg-white rounded-xl border border-black border-solid"
                style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', gridArea: 'span 1 / span 1 / span 1 / span 1'}}
              >
                <div 
                  className={clsx("flex justify-center items-center mb-6 w-16 h-16 text-center border border-black border-solid", feature.color)}
                  style={{borderRadius: '100%'}}
                >
                  <feature.icon className="flex justify-center items-center w-10 max-w-full h-10 text-black align-middle border-0" />
                </div>
                <div className="mb-2 text-center">
                  <h5 className="my-0 font-sans text-2xl font-medium tracking-tight" style={{lineHeight: '1.4'}}>
                    {feature.name}
                  </h5>
                </div>
                <p className="my-0 text-base tracking-tight text-zinc-700" style={{lineHeight: '1.8'}}>
                  {feature.description}

                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
