import React from "react";
import { NotionBlock, NotionBlockComponent } from "@localTypes/schema";
import Link from "next/link";

const NotionParagraph: NotionBlockComponent<NotionBlock.PARAGRAPH> = (props) => {
  const { rich_text } = props.paragraph;

  if (rich_text.length === 1)
    return <p className="font-light text-left whitespace-pre-line leading-7">{rich_text[0].plain_text}</p>;

  return (
    <p className="font-light text-left whitespace-pre-line leading-7">
      {rich_text.map(({ annotations, plain_text, href }, index) => {
        type AnnotationClassMap = { [P in keyof typeof annotations]?: string };
        const annotationClassMap: AnnotationClassMap = {
          code: "p-1 font-mono text-sm rounded-sm text-neutral-100 bg-neutral-800",
          bold: "font-semibold",
          italic: "italic",
        };

        const annotationEntries = Object.entries(annotations);

        const className = annotationEntries.reduce(
          (accumulator, [key, value]) => {
            const classValue =
              annotationClassMap[key as keyof AnnotationClassMap] || "";
            return accumulator + (value ? `${classValue} ` : "");
          },
          ""
        );

        return (
          <span key={index} className={className}>
            {!href ? (
              plain_text
            ) : (
              <Link href={href} target="blog_out">
                {plain_text}
              </Link>
            )}
          </span>
        );
      })}
    </p>
  );
};

export default NotionParagraph;
