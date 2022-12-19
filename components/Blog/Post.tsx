import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { makeNotionRenderer } from 'services/notion/client'
import { NotionBlockResponseList } from '@localTypes/schema'

import Paragraph from "./Paragraph"
import Quote from "./Quote"
import NumberedList from "./NumberedList"
import BulletedList from "./BulletedList"
import CodeBlock from "./CodeBlock"
import {
  Heading1,
  Heading2,
  Heading3
} from "./Heading"

const { NotionRenderer } = makeNotionRenderer({
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  quote: Quote,
  paragraph: Paragraph,
  numbered_list_item: NumberedList,
  bulleted_list_item: BulletedList,
  code: CodeBlock,
})

interface PostProps {
  blocks: NotionBlockResponseList
}

const BlogComponent = ({ blocks }: PostProps) => {
  return (
    <div className="space-y-4">
      <NotionRenderer blockResponse={blocks} />
    </div>
  )
}

export default BlogComponent
