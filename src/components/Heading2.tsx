import { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from '@/utils/tailwind-merge'

interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'normal' | 'large'
}

const Heading2 = forwardRef<HTMLHeadingElement, Heading2Props>(
  ({ className, size = 'normal', ...props }, ref) => (
    <h2
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

Heading2.displayName = 'Heading2'

export default Heading2
