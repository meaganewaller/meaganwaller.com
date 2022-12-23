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

import LandingSectionTitle from './SectionTitle'


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
    color: 'bg-yellow-200',
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
    color: 'bg-purple-100',
  },
  {
    name: 'Tailwind CSS',
    description: 'Quickly build beautiful websites with this utility-first CSS framework',
    icon: SiTailwindcss,
    color: 'bg-green-100',
  },
]
export default function Features() {
  return (

    <div className="relative mx-auto w-full leading-5 sm-max:py-12 lg:py-0" style={{maxWidth: '1140px'}} id="categories">
      <div 
        className="mx-auto mb-12 text-center opacity-100 px-6"
        style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: 'preserve-3d', maxWidth: '990px'}}
      >
        <LandingSectionTitle title="Categories" />
        <h2 className="mt-0 mb-4 font-primary text-5xl font-medium tracking-tight dark:text-secondary" style={{lineHeight: '1.2'}}>
          Whatcha lookin for?
        </h2>
        <p className="mt-2 text-3xl font-semibold tracking-tight dark:text-secondary sm:text-4xl">
          Blog posts, tutorials, guides, snippets, and more.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 leading-5">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="blocky-shadow flex flex-col justify-center items-center py-10 px-8 h-full leading-5 text-center dark:text-contrast-lower dark:bg-primary-lighter rounded-xl border-2 dark:border-secondary-lighter border-solid"
                style={{gridArea: 'span 1 / span 1 / span 1 / span 1'}}
              >
                <div 
                  className={clsx("flex justify-center items-center mb-6 w-16 h-16 text-center dark:bg-secondary-light border border-contrast-lower border-solid", feature.color)}
                  style={{borderRadius: '100%'}}
                >
                  <feature.icon className="flex justify-center items-center w-10 max-w-full h-10 dark:text-primary-dark align-middle border-0" />
                </div>
                <div className="mb-2 text-center">
                  <h5 className="my-0 font-primary text-2xl font-medium tracking-tight" style={{lineHeight: '1.4'}}>
                    {feature.name}
                  </h5>
                </div>
                <p className="my-0 text-base tracking-tight dark:text-contrast-lower" style={{lineHeight: '1.8'}}>
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
