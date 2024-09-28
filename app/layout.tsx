'use client'

import '../styles/index.css'
import '../styles/prism-a11y-dark.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'
import NetlifyIdentityRedirect from '../components/NetlifyIdentityRedirect'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      <body className="flex flex-col h-[100vh] text-slate-900 dark:text-slate-50 dark:bg-slate-900 hyphens-auto">
        <Header />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
        <Footer />
        <NetlifyIdentityRedirect />
      </body>
    </html>
  )
}
