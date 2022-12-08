import Link from 'next/link'
import { 
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si'

const technologies = [
  {
    name: 'Ruby',
    logo: SiRuby,
  },
  {
    name: 'Ruby on Rails',
    logo: SiRubyonrails,
  },
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },
]

const Technologies = () => {
  return (
    <div className="bg-blue-300">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-12 lg:gap-8 md:grid-cols-4">
          {technologies.map((tech) => ( 
            <div 
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 group transform items-center p-4 hover:dark:text-blue-100 hover:text-blue-900 md:origin-top"  
              key={tech.name}
            >
              <Link href="#" >
                <tech.logo className="h-12 w-12" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
