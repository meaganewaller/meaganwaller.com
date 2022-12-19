import { NotionBlock, NotionBlockComponent } from "@localTypes/schema"
import React from "react"

const Quote: NotionBlockComponent<NotionBlock.QUOTE> = (props) => {
  return (
    <blockquote className="flex items-center italic font-light whitespace-pre-line">
      <div className="self-stretch w-1 py-8 mr-4 bg-neutral-900 dark:bg-neutral-50" />
      {props.quote.rich_text[0].plain_text}
    </blockquote>
  )
}

export default Quote
