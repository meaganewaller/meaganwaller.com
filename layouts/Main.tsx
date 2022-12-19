import { meta as head_meta, social } from "@data/meta"
import { Nav } from "@components/Elements/Navbar"
import Footer from "@components/Elements/Footer"
import { useRouter } from "next/router"
import Head from "next/head"
import { BlogCategory, BlogPost } from "@localTypes/schema"
import { ReactNode } from "react"

export interface MainLayoutProps {
  categories: BlogCategory[]
  blogs: BlogPost[]
  children?: ReactNode
  [custom_meta:string]: any
}

export default function MainLayout({ categories, blogs, children, custom_meta }:MainLayoutProps) {
  const router = useRouter()
  const meta = {
    ...head_meta,
    ...custom_meta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url + router.asPath} />
        <link rel="canonical" href={meta.url + router.asPath} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.author} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image || social.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image || social.image} />
        <meta name="copyright" content={`Copyright ${meta.author} ${new Date().getFullYear()}`}></meta>
        <meta name="theme-color" content={meta.theme_color} />
        <meta name="msapplication-TileColor" content={meta.theme_color} />
        {meta.twitter && <meta property="article:published_time" content={meta.twitter} />}
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Nav />
      <div className="mt-24 flex min-h-screen flex-col antialiased">
        {children}
      </div>
      <Footer categories={categories} blogs={blogs} />
    </>
  )
}
