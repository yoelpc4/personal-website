import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src='/images/avatar.webp'
        alt='avatar'
        width={737}
        height={678}
        priority
        className='translate-z-0'
      />
    </div>
  )
}
