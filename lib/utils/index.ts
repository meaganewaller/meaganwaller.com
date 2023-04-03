import slugy from "slugify";
import readingTime, { type ReadTimeResults } from "reading-time";
import type { NotionBlock } from "@localTypes/schema";

export function slugify(text: string[]) {
  return slugy(text.join(""), { lower: true  });
}

export function getReadingTime(blocks: NotionBlock[]): ReadTimeResults {
  const words: string = blocks.reduce((acc, block) => {
    if (block[block.type].rich_text?.length) {
      return acc + block[block.type].rich_text.map(({ plain_text }) => plain_text).join(" ");
    }
    return acc;
  }, "");

  return readingTime(words);
}
