import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'

export default function Header() {
  return (
    <header className='absolute z-30 flex h-[90px] w-full items-center px-16 xl:px-0'>
      <div className='mx-auto xl:container'>
        <div className='flex flex-col items-center justify-between gap-y-2 py-8 xl:flex-row'>
          <Link href='/' className='text-3xl'>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={256}
              height={144}
              priority
              className='h-auto w-[128px]'
            />
          </Link>

          <SocialLinks />
        </div>
      </div>
    </header>
  )
}
