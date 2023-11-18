import Link from 'next/link'
import { socials } from '@/data'

export default function SocialLinks() {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {socials.map(({ url, icon }, index) => (
        <Link
          key={index}
          href={url}
          target='_blank'
          className='transition-all duration-300 hover:text-accent'
        >
          {icon}
        </Link>
      ))}
    </div>
  )
}
