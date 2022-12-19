import { BlogPost, BlogCategory } from "@localTypes/schema";
import { getBlogList, getCategoryList } from "services/notion";
import Link from "next/link";
import MainLayout from "@layouts/Main";
import { postImageUrl } from "services/cloudinary/buildUrl";
import Image from "next/image";
import formatDate from "@lib/utils/date";
import { meta } from "@data/meta";

interface BlogPageProps {
  blogs: BlogPost[]
  categories: BlogCategory[]
}

export default function BlogPage({ blogs, categories }: BlogPageProps) {
  const featuredPost = blogs[0]

  return (
    <MainLayout categories={categories} blogs={blogs} title={`${meta.title} - Blog`}>
      <div className="sm:w-full">
        <div className="px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 w-full max-w-7xl">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <Link href={featuredPost.url} className="block">
                <Image src={postImageUrl(featuredPost.image)} alt={featuredPost.description} className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" width={1200} height={630} />
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <div className="bg-pink-500 inline-flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span>Featured</span>
                </div>
                <h1 className="text-3xl font-bold leading-none lg:text-4xl xl:text-5xl overflow-hidden break-all">
                  <Link href={featuredPost.url}>{featuredPost.title}</Link>
                </h1>
                <p className="pt-2 text-sm font-medium">by <Link href="#" className="mr-1 underline">Meagan Waller</Link> · <span className="mx-1">{formatDate(new Date(featuredPost.created))}</span> · <span className="mx-1 text-gray-600">5 min. read</span></p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            {blogs.map((post) => (
              <div key={post.id} className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <Link href={post.url} className="block">
                  <Image src={postImageUrl(post.image)} alt={post.description} width={1200} height={630} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" />
                </Link>
                <div className="bg-purple-500 inline-flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                  <span>{post.category}</span>
                </div>
                <Link href={post.url}>
                  <h2 className="text-lg font-bold sm:text-xl md:text-2xl">{post.title}</h2>
                </Link>
                <p className="text-sm text-gray-500">{post.description}</p>
                <p className="pt-2 text-xs font-medium"><Link href="#" className="mr-1 underline">Meagan Waller</Link> · <span className="mx-1">{formatDate(new Date(post.created))}</span> · <span className="mx-1 text-gray-600">3 min. read</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const blogs = await getBlogList()
  const categories = await getCategoryList()
  return { props: { blogs, categories }, revalidate: 240 }
}
