import { ComponentMap } from "mdx-bundler/client";
import { PostImage } from "./Image/PostImage";
import { SmartLink } from "./SmartLink";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import ListItem from "./ListItem";
import Code from "./Code";
import Preformatted from "./Preformatted";
import Division from "./Division";

const MDXComponents: ComponentMap = {
  // @ts-ignore
  h1: (props) => <Heading level='h1' {...props} />,
  h2: (props) => <Heading level='h2' {...props} />,
  h3: (props) => <Heading level='h3' {...props} />,
  h4: (props) => <Heading level='h4' {...props} />,
  h5: (props) => <Heading level='h5' {...props} />,
  h6: (props) => <Heading level='h6' {...props} />,
  Image: PostImage,
  a: SmartLink,
  p: Paragraph, 
  ul: (props) => <List type='ul' {...props} />,
  ol: (props) => <List type='ol' {...props} />,
  li: ListItem,
  code: Code as unknown as React.FC,
  pre: Preformatted as React.FC,
  div: Division as React.FC,
};

export default MDXComponents;
