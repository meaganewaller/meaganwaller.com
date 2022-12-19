import Link from "next/link"
import { BlogCategory } from "@localTypes/schema"
import { RxDotFilled } from "react-icons/rx"

interface FooterCategoriesProps {
  categories: BlogCategory[]
}

const colors = [
  {
    hover: "hover:bg-yellow-200 hover:border-yellow-500 hover:text-zinc-900",
    text: "text-yellow-500",
    fill: "fill-yellow-500",
    border: "border-yellow-500"
  },
  {
    hover: "hover:bg-yellow-green-200 hover:border-yellow-green-500 hover:text-zinc-900",
    text: "text-yellow-green-500",
    fill: "fill-yellow-green-500",
    border: "border-yellow-green-500"
  },
  {
    hover: "hover:bg-rose-300 hover:border-rose-500 hover:text-zinc-900",
    text: "text-rose-500",
    fill: "fill-rose-500",
    border: "border-rose-500"
  },
  {
    hover: "hover:bg-green-200 hover:border-green-500 hover:text-zinc-900",
    text: "text-green-500",
    border: "border-green-500",
    fill: "fill-green-500"
  },
  {
    hover: "hover:bg-sky-200 hover:border-sky-500 hover:text-zinc-900",
    text: "text-sky-500",
    border: "border-sky-500",
    fill: "fill-sky-500"
  },
  {
    hover: "hover:bg-purple-200 hover:border-purple-500 hover:text-zinc-900",
    text: "text-purple-500",
    border: "border-purple-500",
    fill: "fill-purple-500"
  },
  {
    hover: "hover:bg-violet-200 hover:border-violet-500 hover:text-zinc-900",
    text: "text-violet-500",
    border: "border-violet-500",
    fill: "fill-violet-500"
  },
  {
    hover: "hover:bg-pink-200 hover:border-pink-500 hover:text-zinc-900",
    text: "text-pink-500",
    border: "border-pink-500",
    fill: "fill-pink-500"
  },
  {
    hover: "hover:bg-red-200 hover:border-red-500 hover:text-zinc-900",
    text: "text-red-500",
    border: "border-red-500",
    fill: "fill-red-500"
  },
]

export default function FooterCategories({ categories }: FooterCategoriesProps) {
  return (
    <div className="sm:px-5 md:px-[25px] xl:pt-0 xl:mt-0 lg:py-28 hidden mx-auto md:block md:py-5 px-8 md:max-w-3xl lg:max-w-5xl align-baseline pb-6 mb-10 pt-14">
      <h4 className="xl:relative text-emerald-700 font-mono italic tracking-wider relative left-6 -top-4 z-2 py-1 px-6 border border-solid border-emerald-900 rounded-full text-lg bg-white leading-relaxed mb-7 inline-block">
        Categories
      </h4>
      <div className="clear-both" />
      {categories.map((category: BlogCategory, index: number) => ( 
        <Link 
          href="#" 
          className={`rounded-full inline-block py-1 px-4 mt-0 mr-2 mb-3 ml-0 font-sans text-sm tracking-wide align-baseline break-words bg-white border border-solid cursor-pointer border-yellow-green-500 text-zinc-700 ${colors[index].border} ${colors[index].hover}`}
          key={category.id}>
          <RxDotFilled className={`${colors[index].text} ${colors[index].fill} inline-block mr-2 -mt-1 w-8 h-8 text-xl leading-6 align-middle` } style={{ stroke: 'rgba(0, 0, 0, 0.4)'}} />
          {category.title}
        </Link>
      ))}
    </div>
  )
}
