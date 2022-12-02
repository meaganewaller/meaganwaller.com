import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";
import { WorkspaceData } from "@localTypes/workspace";

interface Props {
  item: WorkspaceData;
}

export default function WorkspaceItem({ item }: Props): ReactElement {
  return (
    <div>
      <Link href={`/workspace/${item.slug}`}>
        <div className="group">
          <Image
            className="rounded-xl group-hover:opacity-75"
            src={item.image}
            placeholder="blur"
            blurDataURL={item.image}
            width={684}
            height={800}
            alt={'workspace cover image'}
          />
          <div className="text-left w-full">
            <h3 className="mt-2 text-2xl">{item.title}</h3>
            <span className="text-base font-semibold flex items-center">
              {item.tags.map((tag) => (
                <span>{tag.name}</span>
              ))}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
