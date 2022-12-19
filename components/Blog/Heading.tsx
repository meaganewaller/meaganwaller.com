import React from "react";
import { NotionBlock, NotionBlockComponent } from "@localTypes/schema";

export const Heading1: NotionBlockComponent<NotionBlock.HEADING_1> = (props) => {
  return <h1 className="text-4xl font-bold tracking-tighter">{props.heading_1.rich_text[0].plain_text}</h1>
}

export const Heading2: NotionBlockComponent<NotionBlock.HEADING_2> = (props) => {
  return <h2 className="text-3xl font-semibold tracking-tighter">{props.heading_2.rich_text[0].plain_text}</h2>
}

export const Heading3: NotionBlockComponent<NotionBlock.HEADING_3> = (props) => {
  return <h3 className="text-2xl font-medium tracking-tighter">{props.heading_3.rich_text[0].plain_text}</h3>
}
