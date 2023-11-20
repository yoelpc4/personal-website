import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import Transition from '@/pages/components/Transition'

export default function Main({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter()

  const handleExitComplete = () => window && window.scrollTo({ top: 0 })

  return (
    <AnimatePresence
      initial={false}
      mode='wait'
      onExitComplete={handleExitComplete}
    >
      <main key={pathname}>
        <Transition />
        {children}
      </main>
    </AnimatePresence>
  )
}
