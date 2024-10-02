import { Metadata } from 'next'
import Link from 'next/link'

import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
  allBlogs,
  allInspirations,
  allPodcasts,
  allResources,
  allTools,
} from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import ExportedImage from 'next-image-export-optimizer'
import { Icon } from '../../../components/Icon'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const SEO = {
    title: `Tag: #${params.slug}`,
    description: `Browse all posts tagged with #${params.slug}. Discover related articles, inspiration, podcasts, tools and resources.`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/tags/${params.slug}/`,
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

export default function TagPage({ params }: { params: { slug: string } }) {
  const allPosts = [
    ...allBlogs,
    ...allInspirations,
    ...allPodcasts,
    ...allResources,
    ...allTools,
  ]

  // const posts = extractUniqueTags(allPosts)

  // get all the posts from this tag
  const posts = allPosts.filter((post) => post.tags?.includes(params.slug))

  return (
    <>
      <Layout>
        <section className="max-w-3xl m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
          <header className="mb-4">
            <h1 className="text-3xl font-bold">#{params.slug}</h1>
            <p>All content tagged with this tag.</p>
          </header>

          <main className="w-full flex flex-col gap-4">
            {(
              posts as
                | Blog[]
                | Inspiration[]
                | Podcasts[]
                | Resources[]
                | Tools[]
            ).map((post: any) => {
              return (
                <div key={post.slug}>
                  <Link
                    href={`/${post.templateKey}/${post.slug}`}
                    className="p-4 sm:p-8 w-full flex flex-col md:flex-row-reverse gap-8 md:gap-12 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl dark:hover:bg-slate-700 transition-shadow dark:transition-colors"
                  >
                    {post.image ? (
                      <figure className="w-full md:max-w-48 flex justify-center items-center">
                        <ExportedImage
                          width={240}
                          height={240}
                          src={post.image}
                          alt={post.title}
                          className="w-full h-auto rounded-xl"
                        />
                      </figure>
                    ) : (
                      <div className="w-full md:max-w-48 flex justify-center items-center bg-slate-200 dark:bg-slate-800 border border-white dark:border-slate-700 rounded-xl">
                        <Icon
                          name={post.templateKey}
                          className="w-full h-auto  size-12 sm:size-16 opacity-60"
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 w-full">
                      <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold">
                        <Icon name={post.templateKey} className="size-3" />{' '}
                        {post.type}
                      </span>
                      <h2 className="font-bold text-lg text-balance">
                        {post.title}
                      </h2>
                      <p className="text-sm font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden">
                        {post.description}
                      </p>
                      <span className="mt-auto pt-4 text-slate-500 dark:text-slate-400 text-sm font-bold">
                        Read more &rarr;
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </main>
        </section>
      </Layout>
    </>
  )
}
