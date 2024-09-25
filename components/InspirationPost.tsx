'use client' // Marks this as a client component

import Link from 'next/link'
import { Inspiration } from '../.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import Video from './/Video'
import type { MDXComponents } from 'mdx/types'

export default function InspirationPost({
  inspiration,
}: {
  inspiration: Inspiration
}) {
  const MDXContent = useMDXComponent(inspiration.body.code)

  // Define custom MDX components.
  const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Video: ({ src }) => <Video src={src as string} />,

    // Add more custom components...
  }

  return (
    <article className="max-w-5xl p-4 sm:p-12 sm:pt-0 m-auto">
      <PostHeader data={inspiration as Inspiration} />

      <div className="blog-post mt-12">
        <MDXContent components={mdxComponents} />
      </div>

      <PostFooter data={inspiration as Inspiration} />
    </article>
  )
}
