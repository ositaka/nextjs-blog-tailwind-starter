import { Metadata } from 'next'
import {
  allBlogs,
  allInspirations,
  allPodcasts,
  allResources,
  allTools,
} from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import Tag from '../../components/Tag'
import { extractUniqueTags } from '../../utils/tags'
import CategoryHeader from '../../components/CategoryHeader'
import { SITE_NAME, SITE_URL } from '../../config'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `Explore all #Tags available at ${SITE_NAME}`,
    description:
      'Explore a comprehensive list of tags and categories, from design and development to tools and podcasts. Click on any tag to discover new insights.',
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/tags`,
      title: SEO.title,
      description: SEO.description,
      images: [
        {
          url: SEO.image,
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

export default function TagsPage() {
  const allPosts = [
    ...allBlogs,
    ...allInspirations,
    ...allPodcasts,
    ...allResources,
    ...allTools,
  ]

  const tags = extractUniqueTags(allPosts)

  return (
    <Layout>
      <section className="max-w-6xl m-auto px-4 mb-32">
        <CategoryHeader title="All Tags" templateKey="tag" />

        <div className="my-4 flex flex-wrap gap-12 justify-center">
          {/* Group tags by first letter */}
          {Array.from(
            new Set(tags.map((tag: any) => tag.charAt(0).toUpperCase()))
          ) // Get unique first letters
            .sort() // Sort alphabetically
            .map((firstLetter) => {
              // Filter tags starting with the current first letter
              const tagsStartingWithLetter = tags.filter(
                (tag: any) => tag.charAt(0).toUpperCase() === firstLetter
              )
              return (
                <div key={firstLetter}>
                  <h2 className="text-4xl  m-4">{firstLetter}</h2>
                  <ul className="flex flex-col gap-4">
                    {tagsStartingWithLetter.map((tag: any) => (
                      <li key={tag} className="min-w-52 md:min-w-60">
                        <Tag tag={tag} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
        </div>
      </section>
    </Layout>
  )
}
