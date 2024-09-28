import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTools, Tools } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import PostFooter from '../../../components/PostFooter'
import PostHeader from '../../../components/PostHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const tool = allTools.find((tool) => tool.slug === params.slug) as Tools

  if (!tool) {
    return notFound()
  }

  return {
    title: tool.title,
    description: tool.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/tool/${tool.slug}`,
      title: tool.title,
      description: tool.description,
      publishedTime: tool.date,
      authors: `${AUTHOR_NAME}`,
      tags: tool.tags,
      images: [
        {
          url: `${SITE_URL}${tool.image}`,
          width: 1600,
          height: 1200,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = allTools.find((tool) => tool.slug === params.slug)

  if (!tool) {
    return notFound()
  }

  return (
    <Layout>
      <article className="max-w-4xl p-4 sm:p-12 sm:pt-0 m-auto">
        <PostHeader data={tool} />
        <div
          className="blog-post mt-12"
          dangerouslySetInnerHTML={{ __html: tool.body.html }}
        ></div>
        <PostFooter data={tool} />
      </article>
    </Layout>
  )
}
