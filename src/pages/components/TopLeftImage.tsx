import Image from 'next/image'

export default function TopLeftImage() {
  return (
    <div className='absolute left-0 top-0 z-10 w-[200px] opacity-50 mix-blend-color-dodge xl:w-[400px]'>
      <Image
        src='/images/top-left.webp'
        alt='top left image'
        width={411}
        height={405}
      />
    </div>
  )
}
