import Link from 'next/link'
import { Podcasts } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

const cardClasses =
  'w-full flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow transition-300 dark:transition-colors'

export default function PodcastPostCard({ post }: { post: Podcasts }) {
  return (
    <Link
      key={post.slug}
      href={`/podcasts/${post.slug}/`}
      className={cardClasses + ' p-0 group overflow-hidden'}
    >
      <figure className="overflow-hidden aspect-square bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={600}
          height={600}
          className="border-b border-b-slate-200 dark:border-b-slate-700 group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </figure>
      <div className="p-4 sm:p-6 sm:pt-4 flex flex-col gap-2">
        <h2 className="font-bold">{post.title}</h2>
        {post.description && (
          <p className="text-sm font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden ">
            {post.description}
          </p>
        )}
      </div>
    </Link>
  )
}
