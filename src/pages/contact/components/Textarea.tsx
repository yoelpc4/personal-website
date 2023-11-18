import { FC, TextareaHTMLAttributes } from 'react'
import { twMerge } from '@/utils/tailwind-merge'

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => (
  <textarea
    className={twMerge(
      'h-[180px] w-full resize-none rounded-lg border border-white/50 bg-transparent p-6 outline-none placeholder:font-light placeholder:text-white/50 focus:ring-1 focus:ring-accent',
      className
    )}
    {...props}
  />
)

export default Textarea
