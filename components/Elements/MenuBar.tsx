import React from 'react';
import { HiSparkles } from 'react-icons/hi';
import NextLink from 'next/link';
// import { useRouter } from 'next/router';

export default function MenuBar() {
  return (
    <nav className="menubar antialiased subpixel-antialiased">
      <ul>
        <li>
          <NextLink href="/" key="icon">
            <HiSparkles aria-label="Home page" />
          </NextLink>
        </li>
        <li>
          <NextLink href="#" className="font-semibold">
            Site
          </NextLink>
          <ul>
            <li>
              <NextLink href="/start">Start Here!</NextLink>
            </li>
            <li>
              <NextLink href="/history">History</NextLink>
            </li>
            <li>
              <NextLink href="/subscribe">Join the Newsletter</NextLink>
            </li>
            <li>
              <NextLink href="/colophon">Colophon</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="/about">Meagan</NextLink>
          <ul>
            <li>
              <NextLink href="/about">About</NextLink>
            </li>
            <li>
              <NextLink href="/cv">Resume</NextLink>
            </li>
            <li>
              <NextLink href="/contact">Let&apos;s Chat</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="/blog">Blog</NextLink>
          <ul>
            <li>
              <NextLink href="/blog/categories">Categories</NextLink>
              <ul>
                <li>
                  <NextLink href="/blog/categories/tutorials">Tutorials</NextLink>
                </li>
                <li>
                  <NextLink href="/blog/categories/guides">Guides</NextLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="#projects">Projects</NextLink>
          <ul>
            <li>
              <NextLink href="/projects/XXX">First Project</NextLink>
            </li>
            <li>
              <NextLink href="/projects/XXX">Second Project</NextLink>
            </li>
            <li>
              <NextLink href="/projects/XXX">Third Project</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="#snippets">Snippets</NextLink>
          <ul>
            <li>
              <NextLink href="/snippets/ruby">Ruby</NextLink>
            </li>
            <li>
              <NextLink href="/snippets/javascript">JavaScript</NextLink>
            </li>
            <li>
              <NextLink href="/snippets/tailwind">Tailwind CSS</NextLink>
            </li>
            <li>
              <NextLink href="/snippets/lua">Lua</NextLink>
            </li>
            <li>
              <NextLink href="/snippets/applescript">Applescript</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="#workspace">Workspace</NextLink>
          <ul>
            <li>
              <NextLink href="/workspace/macos">Mac Setup</NextLink>
            </li>
            <li>
              <NextLink href="/workspace/linux">Linux Setup</NextLink>
            </li>
            <li>
              <NextLink href="/workspace/home-office">Home Office</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="/guestbook">Guestbook</NextLink>
        </li>
      </ul>
    </nav>
  );
}
