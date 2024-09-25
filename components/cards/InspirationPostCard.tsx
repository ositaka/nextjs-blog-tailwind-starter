import Link from 'next/link'
import { Inspiration } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

const InspirationCardClasses =
  'w-full flex flex-col gap-2 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function InspirationPostCard({ post }: { post: Inspiration }) {
  return (
    <Link
      key={post.slug}
      href={`/inspiration/${post.slug}/`}
      className={InspirationCardClasses + ' p-0 group overflow-hidden'}
    >
      <figure className="overflow-hidden bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="border-b border-b-slate-200 dark:border-b-slate-700 group-hover:scale-110 transition-transform duration-700 aspect-[14/9] object-cover"
          loading="lazy"
        />
      </figure>
      <div className="p-4 sm:p-6 sm:pt-4 flex flex-col gap-2 text-pretty">
        <h2 className="font-bold ">{post.title}</h2>
        {post.description && (
          <p className="text-sm font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden">
            {post.description}
          </p>
        )}
      </div>
    </Link>
  )
}
