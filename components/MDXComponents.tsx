import { ComponentMap } from "mdx-bundler/client";
import { PostImage } from "./Image/PostImage";
import { SmartLink } from "./SmartLink";

const MDXComponents: ComponentMap = {
  // @ts-ignore
  Image: PostImage,
  a: SmartLink,
};

export default MDXComponents;
