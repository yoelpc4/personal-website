import Image from 'next/image'

export default function BulbImage() {
  return (
    <div className='absolute -left-32 bottom-0 w-[200px] rotate-0 animate-pulse mix-blend-color-dodge duration-75 xl:w-[260px]'>
      <Image
        src='/images/bulb.webp'
        alt='bulb'
        width={256}
        height={392}
        className='h-full w-full'
      />
    </div>
  )
}
