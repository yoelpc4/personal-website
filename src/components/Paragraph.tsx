import React, { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from '@/utils/tailwind-merge'

const Paragraph = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge('font-light leading-7 text-white/60', className)}
    {...props}
  />
))

Paragraph.displayName = 'Paragraph'

export default Paragraph
