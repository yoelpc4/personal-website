import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'

export default function ProjectsLink() {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href='/projects'
        scroll={false}
        className='group relative flex h-[185px] w-[185px] items-center justify-center bg-circle-star bg-cover bg-center bg-no-repeat'
      >
        <Image
          src='/images/rounded-text.png'
          alt='projects'
          width={141}
          height={148}
          className='h-full max-h-[148px] w-full max-w-[141px] animate-spin-slow'
        />
        <HiArrowRight className='absolute text-4xl transition-all duration-300 group-hover:translate-x-2' />
      </Link>
    </div>
  )
}
