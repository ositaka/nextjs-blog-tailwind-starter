import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPodcasts, Podcasts } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import PostHeader from '../../../components/PostHeader'
import PostFooter from '../../../components/PostFooter'
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from '../../../config'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const podcast = allPodcasts.find((podcast) => podcast.slug === params.slug) as Podcasts

  if (!podcast) {
    return notFound()
  }

  return {
    title: podcast.title,
    description: podcast.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/podcast/${podcast.slug}`,
      title: podcast.title,
      description: podcast.description,
      publishedTime: podcast.date,
      authors: `${AUTHOR_NAME}`,
      tags: podcast.tags,
      images: [
        {
          url: `${SITE_URL}${podcast.image}`,
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

export default function PodcastPage({ params }: { params: { slug: string } }) {
  const podcast = allPodcasts.find(
    (podcast: Podcasts) => podcast.slug === params.slug
  )

  if (!podcast) {
    return notFound()
  }

  return (
    <Layout>
      <article className="max-w-4xl p-4 sm:p-12 sm:pt-0 m-auto">
        <PostHeader data={podcast} />
        <Link
          href={podcast.link as string}
          title="Open podcast on a new tab"
          target="_blank"
          className="block mb-16 lg:mb-24"
        >
          <ExportedImage
            src={podcast.image}
            alt={podcast.title}
            width={1800}
            height={1800}
            className="rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl transition-shadow transition-300"
            loading="lazy"
          />
        </Link>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: podcast.body.html }}
        ></div>
        <PostFooter data={podcast} />
      </article>
    </Layout>
  )
}
