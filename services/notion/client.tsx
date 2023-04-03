import React from 'react';
import {
  NotionBlockResponse,
  NotionBlockRendererProps,
} from '@localTypes/schema';

type NotionRendererFactory = (map: NotionBlockRendererProps) => {
  NotionRenderer: React.FC<NotionRendererProps>;
};

interface NotionRendererProps {
  blockResponse: NotionBlockResponse<string>[];
}

/**
 * Converts an array of Notion rich text objects into a single string.
 */
export function plainText(richText: readonly { plain_text: string }[]) {
  return richText.map((text) => text.plain_text).join('');
}

/**
 * Extract the URL from a Notion file object.
 */
type FileObject =
  | { type: 'external'; external: { url: string } }
  | { type: 'file'; file: { url: string } };

export function fileUrl(file: FileObject) {
  switch (file.type) {
    case 'external':
      return file.external.url;
    case 'file':
      return file.file.url;
  }
}

export const makeNotionRenderer: NotionRendererFactory = (map) => {
  const NotionRenderer = ({ blockResponse }: NotionRendererProps) => {
    const blocks: NotionBlockResponse<keyof typeof map>[] = blockResponse;

    return (
      <>
        {blocks.map((props) => {
          console.log(props);
          const { type } = props;
          const Block = map[type] as React.FC<NotionBlockResponse>;
          if (!Block) return void 0;
          return <Block key={props.id} {...props} />;
        })}
      </>
    );
  };

  return { NotionRenderer };
};
