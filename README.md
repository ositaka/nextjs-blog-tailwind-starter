# 🚀 Next.js 14 Blog Starter with Tailwind CSS, Contentlayer, & Decap CMS

Welcome to the [**design-code.tips starter**](https://design-code.tips/)! This open-source starter template is built with **Next.js 14**, **Tailwind CSS**, **Contentlayer**, and **Decap CMS**. It's designed to be a simple and customizable way to launch a modern blog, with support for MDX and multiple categories like Code Blog, Inspiration, Podcasts, Tools, and Resources.

## 💻 Starter Preview

![Homepage in light and dark modes](/starter-preview.png)

## ✨ Features

- 🛠️ **Next.js 14**: Fast, modern React framework for production-ready web applications.
- 🎨 **Tailwind CSS**: Utility-first CSS for rapid UI development.
- 📄 **MDX Support**: Write your blog posts in Markdown with JSX components.
- 🗂️ **Contentlayer**: Simple content management with files as data.
- 📋 **Decap CMS**: Easily manage your posts through a friendly CMS interface.
- 🏷️ **Categories**: Pre-configured sections for Code Blog, Inspiration, Podcasts, and Tools.
- 🖼️ **Optimized Images**: Use the `<ExportedImage />` component from the [`next-image-export-optimizer`](https://www.npmjs.com/package/next-image-export-optimizer) package for optimized image handling in static exports, replacing the default Next.js `<Image />` component for better control over image quality, formats (like WEBP), and cache settings.
- 🌗 **Dark/Light Mode**: Automatically adapts to the user's operating system settings.

## 📦 Tech Stack

- **Next.js 14**
- **Tailwind CSS**
- **MDX**
- **Contentlayer**
- **Decap CMS**

## 🚀 Quick Start

Follow these steps to get the project up and running:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ositaka/design-code.tips
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser to see the app running.

---

## ✍️ Writing Content (without CMS)

You can create different types of content (like blog posts or podcasts) in separate folders under `content/`. Each folder corresponds to a category in your blog.

Content is written in **MDX** format and managed using [**Contentlayer**](https://contentlayer.dev/). To create a new post, add an `.mdx` file in the appropriate folder inside `content/` for each category:

```
content/
  ├── blog/
  ├── inspiration/
  ├── podcasts/
  ├── resources/
  └── tools/
```

Each post supports frontmatter fields like `title`, `description`, `date`, and `featured`.

Example frontmatter for a blog post:

```md
---
templateKey: blog
title: >
  Custom Scrollbar with CSS (WebKit)
date: 2021-06-19T19:28:37.629Z
featured: true
description: >
  Learn how to customize the scrollbar with CSS for WebKit browsers, providing a visually appealing design for scrollable elements on your website.
tags:
  - web-development
  - css
---

Your markdown content here...
```

Example inspiration post, with a video:

```md
---
templateKey: inspiration
title: >
  2Advanced Studios — Flash website in 2003
date: 2003-03-03T15:04:10.000Z
featured: true
description: >
  An old flash website (v4) of 2advanced.com, that has inspired me quite a lot in my teenage years.
tags:
  - animation
  - flash
  - website
image: /media/2advanced-flash-website-v4-2003.jpg
---

<Video src="/media/2advanced-flash-website-v4-2003.mp4" />

## © 2003 Advanced Studios

Currently, the 2Advanced Studios are closed for real, since some years already.
```

## 🖥️ Decap CMS

### Run the CMS server

To use Decap CMS, you'll need to run its server alongside your Next.js development server. This can be done by running the following command **in a separate terminal**:

```bash
npx decap-server
```

You can then access the CMS at http://localhost:3000/admin/index.html.

> [!NOTE]  
> If you'd like to test the CMS locally, set `local_backend: true` in `public/admin/config.yml`. Don't forget to restart the server after making changes.

> [!TIP]  
> For more information, refer to the [Decap CMS documentation](https://decapcms.org/docs/). If you'd like to see an advanced example of how to use Decap CMS, check out this [Decap CMS `config.yml` example](https://github.com/decaporg/decap-cms/blob/main/dev-test/config.yml).

### Screenshots

![Decap CMS - Screenshot](/screenshot--cms1.png)
![Decap CMS - Screenshot](/screenshot--cms2.png)

---

## 📖 Configuration

Customize the project to suit your needs by editing the following files:

- `config.js`: Your Bleg Starter configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `next.config.js`: Next.js custom settings.
- `contentlayer.config.js`: Contentlayer configuration for MDX files.
- `decap-cms/config.yml`: Decap CMS configuration.

### `next.config.js`:

- The project uses the [**`next-image-export-optimizer`**](https://www.npmjs.com/package/next-image-export-optimizer) package to enhance image handling in static exports.
- Custom settings for image optimization:
  - **Image Folder**: Images are stored in the `public/media` folder.
  - **Export Settings**: Optimized images are exported to the `out/` folder.
  - **Quality**: Image quality is set to **75%**.
  - **WEBP Format**: By default, the images are converted to **WEBP** for improved performance.
  - **Blurred Placeholder**: Blurry placeholders are enabled for a smoother loading experience. To disable this, set `nextImageExportOptimizer_generateAndUseBlurImages` to `false` in your `.env` or `next.config.js` file, and pass `placeholder="empty"` to all `<ExportedImage>` components.

> [!NOTE]  
> Replace Next.js `<Image />` components with `<ExportedImage />` to leverage these optimizations.

Example usage:

```tsx
import ExportedImage from 'next-image-export-optimizer'

<ExportedImage
  src="/media/example.jpg"
  alt="Example Image"
  width={800}
  height={600}
  placeholder="blur"
/>
```

### TypeScript and Contentlayer Integration

This project uses [**Contentlayer**](https://contentlayer.dev/) to automatically generate TypeScript types for your content. The configuration is managed in the `contentlayer.config.ts` file located at the root of the project. Each document type (e.g., Blog posts, Pages) has its own structure and generated types, ensuring type safety when working with content in your components.

Below is an example of the TypeScript types generated for the **Blog** document:

```ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: false },
    description: { type: 'string', required: false },
    tags: { type: 'json', required: false },
    templateKey: { type: 'string', required: false },
    featured: { type: 'boolean', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
})
```

> [!NOTE]  
> The `slug` field is automatically computed from the filename, removing the `.md` extension.

#### Where to Find the Generated Types

The types are generated into the `./.contentlayer` directory and can be used throughout the application. Simply import the types from there:

```tsx
import { allBlogs, Blog } from '../../.contentlayer/generated')
import { pick } from '@contentlayer2/client'
```

#### Working with Content in Components

When working with content in your components, you can use the generated types to ensure type safety. For example, when mapping over blog posts:

```tsx
let blogs = allBlogs.map((blog) => pick(blog, ['title', 'date', 'slug', 'description', 'templateKey'])
```

In this example, `allBlogs` is an array of `Blog` types, and we're using the `pick` function to select specific fields from each blog post.

#### Type Assertion

When working with content from `allBlogs`, you can assert the type to ensure it's a `Blog` type:

```tsx
const blog = allBlogs.find((b) => b.slug === params.slug) as Blog
```

This way, you can access the fields of the `Blog` type without any issues.

#### Passing Content to Components

When passing content to components, you can use the `Blog` type to ensure the correct structure:

```tsx
<BlogPostCard key={post.slug} post={post as Blog} />
```

With these types in place, you can benefit from strong typing and auto-completion when working with your content.

---

## 🚀 Deploy

Deploy your own instance of this blog starter project using one of the following providers:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR_REPO_URL)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=YOUR_REPO_URL)

If you encounter errors related to **`sharp`** during deployment, please try removing the `package-lock.json` file, as this can sometimes resolve issues with Sharp's dependencies.

## 🛠️ Setting up Netlify Identity with Decap CMS

If you're deploying your site with Netlify and using Decap CMS for content management, you'll need to enable Netlify Identity to allow users to log in to the CMS at /admin.

1. **Enable Identity**:

   - Go to your site's dashboard on Netlify, navigate to the "Identity" tab, and click Enable Identity.

2. **Configure Git Gateway**:

   - In the Identity settings, enable Git Gateway. This will allow your CMS to interact with the repository via OAuth authentication.

3. **Invite Users**:

   - Invite yourself or other team members to the CMS. Go to the "Identity" tab, click Invite Users, and send invites via email.

4. **Login Access**:

   - Once enabled, users can log in to the /admin panel using their Netlify Identity credentials.

Here's a preview of how this might look in your `config.yml` for Decap CMS:

```yaml
backend:
  name: git-gateway
  branch: main
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

---

## 📣 Contributing

Contributions are welcome! Here are some ways you can help improve the project:

- **Bug Fixes**: If you encounter any issues, please submit an issue or pull request to address it.
- **Feature Additions**: Have an idea for a new feature? Open an issue to discuss it or submit a pull request with your implementation.
- **Documentation Improvements**: Help us enhance the README by suggesting edits or additional information.

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Create a pull request

Thank you for considering contributing to the project!

## 🔗 Links

- [Demo](https://design-code.tips)
- [Documentation](https://github.com/ositaka/nextjs-blog-tailwind-starter/blob/main/README.md)
- [GitHub Repo](https://github.com/ositaka/nextjs-blog-tailwind-starter)

---

## 🙌 Acknowledgments

Built with ❤️ in 🇵🇹 and 🇧🇪 using [Next.js](https://nextjs.org/) (an amazing open-source React framework), [Tailwind CSS](https://tailwindcss.com/) (for rapid UI development), [Contentlayer](https://contentlayer.dev/) (for managing content), and [Decap CMS](https://decapcms.org/) (for a user-friendly content management experience).

A big thank you to the communities behind these projects for their hard work and dedication!
