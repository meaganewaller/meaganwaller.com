import { BlogPost, BlogCategory } from "@localTypes/schema";
import { getBlogList, getCategoryList } from "services/notion";
import Link from "next/link";
import MainLayout from "@layouts/Main";
import { postImageUrl } from "services/cloudinary/buildUrl";
import Image from "next/image";
import { meta } from "@data/meta";
import FeaturedPost from "@components/Elements/FeaturedPost";
import formatDate from "@lib/utils/date";
import { AiOutlineCode, AiOutlineCompass, AiOutlineExperiment, AiOutlineStar, AiOutlineThunderbolt } from "react-icons/ai"

interface BlogPageProps {
  blogs: BlogPost[]
  categories: BlogCategory[]
}

export default function BlogPage({ blogs, categories }: BlogPageProps) {
  return (
    <MainLayout categories={categories} blogs={blogs} title={`${meta.title} - Blog`}>
      <div className="m-0 min-w-auto border-solid border-t-2 border-transparent h-0 mt-4 mb-4" />
      <div className="m-0 min-w-0 w-full mx-auto max-w-6xl px-4">
        <div className="m-0 min-w-0 flex">
          <div className="w-full min-w-0 m-0 mx-auto max-w-none">
            <div className="min-w-0 flex flex-nowrap overflow-x-auto w-auto scroll-smooth -m-2">
              <Link className="flex-1 min-w-1/3 m-2 appearance-none inline-block text-center no-underline rounded-2xl p-0 min-w-auto" href="#" style={{ transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease', boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)'}}>
                <div className="hidden md:block box-content rounded-lg">
                  <AiOutlineCode width={8} height={8} className="w-full h-8 text-3xl" />
                  <span className="font-secondary leading-6 block whitespace-nowrap p-4 m-0" style={{ fontSize: '1rem'}}>Tutorials</span>
                </div>
              </Link>
              <Link className="flex-1 min-w-1/3 m-2 appearance-none inline-block text-center no-underline rounded-2xl p-0 min-w-auto" href="#" style={{ transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease', boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)'}}>
                <div className="hidden md:block box-content rounded-lg">
                  <AiOutlineExperiment width={8} height={8} className="w-full h-8 text-3xl" />
                  <span className="font-secondary leading-6 block whitespace-nowrap p-4 m-0" style={{ fontSize: '1rem'}}>Experiments</span>
                </div>
              </Link>
              <Link className="flex-1 min-w-1/3 m-2 appearance-none inline-block text-center no-underline rounded-2xl p-0 min-w-auto" href="#" style={{ transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease', boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)'}}>
                <div className="hidden md:block box-content text-center rounded-lg">
                  <AiOutlineThunderbolt width={8} height={8} className="w-full h-8 text-3xl" />
                  <span className="font-secondary leading-6 block whitespace-nowrap p-4 m-0" style={{ fontSize: '1rem'}}>Tips</span>
                </div>
              </Link>
              <Link className="flex-1 min-w-1/3 m-2 appearance-none inline-block text-center no-underline rounded-2xl p-0 min-w-auto" href="#" style={{ transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease', boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)'}}>
                <div className="hidden md:block box-content rounded-lg">
                  <AiOutlineStar width={8} height={8} className="w-full h-8 text-3xl" />
                  <span className="font-secondary leading-6 block whitespace-nowrap p-4 m-0" style={{ fontSize: '1rem'}}>Career</span>
                </div>
              </Link>
              <Link className="flex-1 min-w-1/3 m-2 appearance-none inline-block text-center no-underline rounded-2xl p-0 min-w-auto" href="#" style={{ transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease', boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)'}}>
                <div className="hidden md:block box-content rounded-lg">
                  <AiOutlineCompass width={8} height={8} className="w-full h-8 text-3xl" />
                  <span className="font-secondary leading-6 block whitespace-nowrap p-4 m-0" style={{ fontSize: '1rem'}}>Guides</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-1 py-12 lg:py-20">
        <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-12">
            <FeaturedPost featuredPost={blogs[0]} />

            {blogs.slice(1).map((post) => (
              <article className="story col-span-12 lg:col-span-4" key={post.id}>
               <Link className="story__img rounded" href={post.url}>
                  <figure>
                    <Image src={postImageUrl(post.image)} alt={post.description} width={1200} height={630} />
                  </figure>
                </Link>

                <div className="story__content">
                  <div className="mb-2 lg:mb-3">
                    <Link className="story__category" href="#">
                      <svg className="icon mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg>
                      <i className="not-italic">{post.category}</i>
                    </Link>
                  </div>

                  <div className="text-component">
                    <h2 className="story__title"><Link href={post.url}>{post.title}</Link></h2>
                  </div>

                  <div className="story__author mt-3 lg:mt-5">
                    <Link className="hidden" href="#">
                      <Image src={`/static/images/header.svg`} width={600} height={600} alt="Author picture" />
                    </Link>

                    <div className="leading-extra-tight">
                      <address className="story__author-name hidden"><a href="#" rel="author">Meagan Waller</a></address>
                      <p className="story__meta"><time>{formatDate(new Date(post.created))}</time> &mdash; 5 min read</p>
                    </div>
                  </div>
                </div>
              </article>
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
