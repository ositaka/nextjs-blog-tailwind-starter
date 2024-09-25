import Link from 'next/link'
import { useState } from 'react'
import { Icon } from './Icon'

const menuItemClasses =
  'w-full flex items-center gap-3 p-3 px-6 text-sm tracking-wide text-slate-700 dark:text-slate-700 hover:text-slate-800 dark:hover:text-slate-950 hover:font-semibold transition-colors transition-all border-b border-b-slate-200 dark:border-b-slate-300 hover:bg-slate-100 dark:hover:bg-white'

const iconClasses = 'size-4 opacity-70'

export default function Header() {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="flex p-4 sm:p-6 fixed w-full z-10 pointer-events-none">
      <nav className="flex w-full justify-between items-center">
        <Link
          href="/"
          className="font-bold opacity-80 hover:opacity-100 transition-opacity rounded outline-offset-8 pointer-events-auto"
        >
          dc.tips
        </Link>

        <div className="absolute right-0 top-4 sm:top-5 group pointer-events-auto">
          <button
            className="p-2 text-xs uppercase font-bold rounded-lg absolute right-4 sm:right-6 z-10 bg-white text-slate-700 dark:bg-slate-300 shadow-md hover:shadow-lg transition-shadow"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <span aria-label="Close menu" className="w-4 block">
                <Icon name="close" className="size-4" />
              </span>
            ) : (
              <span className="flex gap-2 items-center group text-xs">
                Menu
                <Icon name="burger" className="size-4" />
              </span>
            )}
          </button>

          <div className={`${navbar ? '' : 'hidden'}`}>
            <menu className="min-w-48 flex flex-col absolute right-4 sm:right-6 py-3 bg-white dark:bg-slate-100 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/"
                  className={menuItemClasses}
                >
                  <Icon name="home" className={iconClasses} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/blog"
                  className={menuItemClasses}
                >
                  <Icon name="blog" className={iconClasses} />
                  Code Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tags"
                  className={menuItemClasses}
                >
                  <Icon name="tag" className={iconClasses} />
                  All Tags
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/inspiration"
                  className={menuItemClasses}
                >
                  <Icon name="inspiration" className={iconClasses} />
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/podcasts"
                  className={menuItemClasses}
                >
                  <Icon name="podcasts" className={iconClasses} />
                  Podcasts
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tools"
                  className={menuItemClasses}
                >
                  <Icon name="tools" className={iconClasses} />
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/resources"
                  className={menuItemClasses}
                >
                  <Icon name="resources" className={iconClasses} />
                  Resources
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </nav>
    </header>
  )
}
