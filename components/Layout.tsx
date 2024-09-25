'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


const Layout = ({ children }: { children: any }) => {
  const pathname = usePathname()

  return (
  <motion.main
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 60,
      damping: 30,
    }}
    className="w-full max-w-full"
  >
    <div className="pt-24">{children}</div>
  </motion.main>
  )
}
export default Layout
