import { NotionBlock, NotionBlockComponent } from "@localTypes/schema"
import React from 'react'

const NumberedList: NotionBlockComponent<NotionBlock.NUMBERED_LIST_ITEM> = (props) => {
  return (
    <li className="font-light">
      {props.numbered_list_item.rich_text[0].plain_text}
    </li>
  )
}

export default NumberedList
