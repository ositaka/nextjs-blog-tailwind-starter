import { Metadata } from 'next'
import { allPages, Page } from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Get page data
const about = allPages.find((about: Page) => about?.slug === 'about') as Page

export function generateMetadata(): Metadata {
  return {
    title: about?.title || 'About',
    description: about?.description || 'Welcome to the about page',
    openGraph: {
      url: `${SITE_URL}/about/`,
      title: `${about?.title}`,
      description: `${about?.description}`,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: 'banner',
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function About() {
  return (
    <Layout>
      <section className="flex flex-col gap-12 my-24 mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold">{about?.title}</h1>
        <div className="flex flex-col gap-8">
          <ReactMarkdown remarkPlugins={[gfm]} children={about?.description} />
        </div>
        <div className="flex flex-wrap justify-center gap-2"></div>
      </section>
    </Layout>
  )
}
