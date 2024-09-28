'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    netlifyIdentity: any
  }
}

export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: unknown) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return null // This component doesn't render anything visually
}
