import Image from 'next/image'

export default function Circles() {
  return (
    <div className='absolute -bottom-0 -right-16 w-[200px] animate-pulse mix-blend-color-dodge duration-75 xl:w-[300px]'>
      <Image
        src='/images/circles.webp'
        alt='circles'
        width={260}
        height={200}
        className='h-full w-full'
      />
    </div>
  )
}
