import { Metadata } from 'next'
import { pick } from '@contentlayer2/client'
import { Tools as ToolsType, allTools } from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ToolsPostCard from '../../components/cards/ToolsPostCard'
import CategoryHeader from '../../components/CategoryHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of Tools by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Explore a curated collection of essential tools for developers and designers, handpicked to enhance productivity and creativity.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/tools/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function Tools() {
  //  help of pick get require filter value
  const tools = allTools.map((tools) =>
    pick(tools, [
      'title',
      'date',
      'slug',
      'description',
      'image',
      'templateKey',
    ])
  )

  return (
    <Layout>
      <section className="max-w-3xl m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader title="Tools" templateKey={tools[0].templateKey!} />

        <div className="flex flex-wrap gap-4 w-full">
          {tools.map((post) => {
            return <ToolsPostCard key={post.slug} post={post as ToolsType} />
          })}
        </div>
      </section>
    </Layout>
  )
}
