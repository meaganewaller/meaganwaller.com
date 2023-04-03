import type { Components } from "@mdx-js/react/lib";

import H1 from "@components/mdx/H1";
import H2 from "@components/mdx/H2";
import H3 from "@components/mdx/H3";
import H4 from "@components/mdx/H4";
import A from "@components/mdx/A";
import P from "@components/mdx/P";
import Li from "@components/mdx/Li";
import Ul from "@components/mdx/Ul";
import Code from "@components/mdx/Code";
import Pre from "@components/mdx/Pre";

const MDXComponents: Components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  p: P,
  li: Li,
  ul: Ul,
  code: Code,
  pre: Pre,
};

export default MDXComponents;
