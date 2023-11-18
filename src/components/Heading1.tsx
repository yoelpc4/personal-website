import { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from '@/utils/tailwind-merge'

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'normal' | 'large'
}

const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(
  ({ className, size = 'normal', ...props }, ref) => (
    <h1
      ref={ref}
      className={twMerge(
        'text-4xl font-semibold leading-tight md:leading-snug',
        size === 'normal' && 'mb-4 md:text-5xl',
        size === 'large' && 'mb-8 md:text-6xl',
        className
      )}
      {...props}
    />
  )
)

Heading1.displayName = 'Heading1'

export default Heading1
