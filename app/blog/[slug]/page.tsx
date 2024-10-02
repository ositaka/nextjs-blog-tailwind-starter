import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs, Blog } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import BlogPost from '../../../components/BlogPost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug) as Blog

  if (!blog) {
    return notFound()
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/blog/${blog.slug}/`,
      title: blog.title,
      description: blog.description,
      publishedTime: blog.date,
      authors: `${AUTHOR_NAME}`,
      tags: blog.tags,
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

  if (!blog) {
    return notFound()
  }

  return (
    <Layout>
      <BlogPost blog={blog} />
    </Layout>
  )
}
