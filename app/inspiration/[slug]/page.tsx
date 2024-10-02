import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allInspirations, Inspiration } from '../../../.contentlayer/generated'

import Layout from '../../../components/Layout'
import InspirationPost from '../../../components/InspirationPost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const inspiration = allInspirations.find(
    (inspiration) => inspiration.slug === params.slug
  ) as Inspiration

  if (!inspiration) {
    return notFound()
  }

  return {
    title: inspiration.title,
    description: inspiration.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/inspiration/${inspiration.slug}/`,
      title: inspiration.title,
      description: inspiration.description,
      publishedTime: inspiration.date,
      authors: `${AUTHOR_NAME}`,
      tags: inspiration.tags,
      images: [
        {
          url: `${SITE_URL}${inspiration.image}`,
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

export default function InspirationPage({
  params,
}: {
  params: { slug: string }
}) {
  const inspiration = allInspirations.find(
    (inspiration) => inspiration.slug === params.slug
  )

  return (
    <Layout>
      <InspirationPost inspiration={inspiration as Inspiration} />
    </Layout>
  )
}
