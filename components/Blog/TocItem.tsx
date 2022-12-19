import { NotionBlockResponse } from "@localTypes/schema";
import Link from "next/link";

interface Props {
  heading: NotionBlockResponse
}

export function TocItem({ heading }:Props) {
  return (
    <Link className={`!font-normal no-underline opacity-50 duration-200 hover:underline hover:opacity-100 motion-reduce:transition-none ${heading.object.length === 2 ? "ml-2" : ""} ${heading.object.length === 3 ? "ml-4" : ""}`} href={`#${heading.type}`}>
      {heading.object.length}
    </Link>
  )
}
