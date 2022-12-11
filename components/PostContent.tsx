import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

type Props = {
  content: Record<string, string>[]
}

const PostContent = ({ content }: Props) => {
  function renderPostElement(postElement: Record<string, string>): ReactNode {
    switch (postElement.type) {
      case 'h1':
        return (
          <h1 className="text-slate-200 text-3xl font-medium">
            {postElement.content}
          </h1>
        )
      case 'h2':
        return (
          <h2 className="text-slate-200 text-2xl font-medium">
            {postElement.content}
          </h2>
        )
      case 'p':
        return (
          <p className="text-slate-200} text-lg font-light">
            {postElement.content}
          </p>
        );
      case 'br':
        return <br />;
      case 'a':
        return (
          <a
            className="text-slate-200 text-base font-extralight"
            href={postElement.content}
            target="_blank"
            rel="noopener noreferrer">
            {postElement.content}
          </a>
        );
      case 'li':
        return (
          <p className="text-slate-200 text-lg font-light">
            &bull;{postElement.content}
          </p>
        );
      case 'code':
        return (
          <div className="w-[360px] sm:w-full">
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={postElement.content}
              components={{
                code({ className, children, ...props }) {
                  const match =
                    /language-(\w+)/.exec(className || '') || 'javascript';
                  return (
                    <SyntaxHighlighter
                      customStyle={{ borderRadius: '5px' }}
                      wrapLines
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                      />
                  );
                },
              }}
              />
          </div>
        );
      case 'image':
        return <ReactMarkdown>{postElement.content}</ReactMarkdown>;
      default:
      return null;
    }
  }
  return (

    <article>
      {content.map((postElement: Record<string, string>) =>
        renderPostElement(postElement),
      )}
    </article>
  )
}

export default PostContent
