import React from "react"
import { NotionBlockResponse, NotionBlockRendererProps } from "@localTypes/schema"

type NotionRendererFactory = (map: NotionBlockRendererProps) => {
  NotionRenderer: React.VFC<NotionRendererProps>
}

interface NotionRendererProps {
  blockResponse: NotionBlockResponse<string>[]
}

export const makeNotionRenderer: NotionRendererFactory = (map) => {
  const NotionRenderer = ({ blockResponse }: NotionRendererProps) => {
    const blocks: NotionBlockResponse<keyof typeof map>[] = blockResponse

    return (
      <>
        {blocks.map((props) => {
          const { type } = props
          const Block = map[type] as React.VFC<NotionBlockResponse>
          if (!Block) return void 0
          return <Block key={props.id} {...props} />
        })}
      </>
    )
  }

  return { NotionRenderer }
}
