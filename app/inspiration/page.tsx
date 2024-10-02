import { Metadata } from 'next'
import { Inspiration, allInspirations } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import Layout from '../../components/Layout'
import InspirationPostCard from '../../components/cards/InspirationPostCard'
import CategoryHeader from '../../components/CategoryHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of Inspiration by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Find inspiration through web intros, show reels, and creative showcases, curated for designers and developers.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/inspiration/`,
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

export default function InspirationPage() {
  //  help of pick get require filter value
  const inspirations = allInspirations.map((inspirations) =>
    pick(inspirations, [
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
      <section className="md:max-w-[87%] m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Inspiration"
          templateKey={inspirations[0].templateKey!}
        />

        <div className="grid lg:grid-cols-2 gap-4 w-full justify-center">
          {inspirations.map((post) => {
            return (
              <InspirationPostCard key={post.slug} post={post as Inspiration} />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
