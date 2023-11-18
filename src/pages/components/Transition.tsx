import { Variants, motion } from 'framer-motion'

const variants: Variants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

export default function Transition() {
  return (
    <>
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        className='fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#2e2257]'
      />
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        className='fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#3b2d71]'
      />
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        className='fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#4b3792]'
      />
    </>
  )
}
