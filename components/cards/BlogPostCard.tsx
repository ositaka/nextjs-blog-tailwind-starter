import Link from 'next/link'
import { Blog } from '../../.contentlayer/generated'

const cardClasses =
  'px-4 py-4 w-full flex flex-col gap-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function BlogPostCard({ post }: { post: Blog }) {
  return (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}/`}
      className={cardClasses + ' sm:p-6'}
    >
      <h3 className="font-bold text-lg text-balance">{post.title}</h3>
      {post.description && (
        <p className="text-sm text-balance font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden">
          {post.description}
        </p>
      )}
      <span className="mt-auto text-slate-500 text-sm font-bold">
        Read more &rarr;
      </span>
    </Link>
  )
}
