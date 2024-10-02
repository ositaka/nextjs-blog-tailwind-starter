import { Metadata } from 'next'
import { pick } from '@contentlayer2/client'
import {
  Resources as ResourceType,
  allResources,
} from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ResourcesPostCard from '../../components/cards/ResourcePostCard'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import CategoryHeader from '../../components/CategoryHeader'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Collection of Resources by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Explore a curated collection of resources related with accessibility, ui and ux patterns, and source materials for developers and designers.',
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

export default function Resources() {
  //  help of pick get require filter value
  const resources = allResources.map((resources) =>
    pick(resources, [
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
      <section className="max-w-2xl m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Resources"
          templateKey={resources[0].templateKey!}
        />

        <div className="flex flex-wrap gap-4 w-full">
          {resources.map((resourcesItem) => {
            return (
              <ResourcesPostCard
                key={resourcesItem.slug}
                post={resourcesItem as ResourceType}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
