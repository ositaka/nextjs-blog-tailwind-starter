import Link from 'next/link'
import { Resources } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

const cardClasses =
  'w-full flex flex-col sm:flex-row gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function ResourcesPostCard({ post }: { post: Resources }) {
  return (
    <Link
      key={post.slug}
      href={`/resources/${post.slug}/`}
      className={cardClasses + ' items-center group overflow-hidden'}
    >
      <figure className="overflow-hidden size-36 sm:size-24 shrink-0 rounded-lg shadow-lg bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </figure>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-bold">{post.title}</h2>
        <p className="text-sm font-light tracking-wide text-ellipsis line-clamp-2 overflow-hidden ">
          {post.description}
        </p>
      </div>
    </Link>
  )
}
