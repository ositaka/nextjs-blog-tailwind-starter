import Link from 'next/link'
import { Tools } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

const cardClasses =
  'w-full flex gap-3 sm:gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function ToolsPostCard({ post }: { post: Tools }) {
  return (
    <Link
      key={post.slug}
      href={`/tools/${post.slug}/`}
      className={cardClasses + ' items-center group overflow-hidden'}
    >
      <figure className="overflow-hidden size-16 sm:size-24 shrink-0 rounded-xl shadow-lg bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </figure>
      <div className="p-2 sm:p-4 flex flex-col gap-2">
        <h2 className="font-bold text-balance text-sm sm:text-base">
          {post.title}
        </h2>
        <span className="hidden sm:flex mt-auto text-slate-500 text-sm font-bold">
          View tool &rarr;
        </span>
      </div>
    </Link>
  )
}
