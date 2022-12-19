import { NotionBlock, NotionBlockComponent } from "@localTypes/schema"
import React from 'react'
import Link from "next/link"

const BulletedList: NotionBlockComponent<NotionBlock.BULLETED_LIST_ITEM> = (props) => {
  return (
    <li className="font-light list-disc indent-5">
      {props.bulleted_list_item.rich_text.map(({annotations, plain_text, href }, index) => {
        type AnnotationClassMap = { [P in keyof typeof annotations]?: string }
        const annotationClassMap: AnnotationClassMap = {
          code: "p-1 font-mono text-sm rounded-sm text-neutral-100 bg-neutral-800",
          bold: "font-semibold",
          italic: "italic",
        }

        const annotationEntries = Object.entries(annotations)

        const className = annotationEntries.reduce(
          (acc, [key, value]) => {
            const classValue = annotationClassMap[key as keyof AnnotationClassMap] || ""
            return acc + (value ? `${classValue} ` : "")
          },
          ""
        )

        return (
          <span key={index} className={className}>
            {!href ? (
              plain_text
            ) : (
              <Link href={href} target="blog_out">{plain_text}</Link>
            )}
          </span>
        )
      })}
    </li>
  )
}

export default BulletedList
