import { buildUrl } from "services/cloudinary"
import Image from "next/image"
import { BlogPost } from "@localTypes/schema"
import { ReactPropTypes } from "react"

interface ImageProps {
  post: BlogPost
}

const BlogImage = ({
  post,
  ...props
}: ReactPropTypes & ImageProps) => { 
  const img = buildUrl(post.image, { transformations: { resize: { width: 1200 }}})
  return (
    <Image
      alt={post.description}
      src={img}
      style={{ height: "100vh", width: "50vw", objectFit: "cover"}}
      {...props}
      />
  )
 } 

export default BlogImage
