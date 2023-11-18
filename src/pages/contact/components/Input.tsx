import { FC, InputHTMLAttributes } from 'react'
import { twMerge } from '@/utils/tailwind-merge'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => (
  <input
    className={twMerge(
      'h-[52px] w-full rounded-lg border border-white/50 bg-transparent pl-6 outline-none placeholder:font-light placeholder:text-white/50 focus:ring-1 focus:ring-accent',
      className
    )}
    {...props}
  />
)

export default Input
