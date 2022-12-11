import Link from 'next/link'

export function CustomLink({ href, ...rest }) {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  if (isInternalLink) {
    return <Link href={href} className="text-red-100" {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}
