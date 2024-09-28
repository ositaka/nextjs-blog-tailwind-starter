import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `page/*.md`,
  contentType: 'markdown',
  fields: {
    slug: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Inspiration = defineDocumentType(() => ({
  name: 'Inspiration',
  filePathPattern: `inspiration/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}))

const Podcasts = defineDocumentType(() => ({
  name: 'Podcasts',
  filePathPattern: `podcasts/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Tools = defineDocumentType(() => ({
  name: 'Tools',
  filePathPattern: `tools/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Resources = defineDocumentType(() => ({
  name: 'Resources',
  filePathPattern: `resources/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Blog, Inspiration, Podcasts, Tools, Resources],
  disableImportAliasWarning: true,
})
