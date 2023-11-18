import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowRight } from 'react-icons/bs'
import { projects } from '@/data'

export default function ProjectsSlider() {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className='h-[300px] sm:h-[380px]'
    >
      {projects.map(({ title, image, url }, index) => (
        <SwiperSlide key={index}>
          <Link
            href={url}
            target='_blank'
            className='group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg'
          >
            <div className='group relative flex items-center justify-center overflow-hidden'>
              <Image
                src={image}
                alt={title}
                width={1280}
                height={720}
                className='h-auto w-full max-w-[512px] rounded-lg'
              />
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-300 group-hover:rounded-lg group-hover:opacity-90' />
              <div className='absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-28'>
                <div className='flex items-center gap-x-2 text-sm tracking-widest'>
                  <div className='max-w-[200px] delay-100'>View Project</div>
                  <div className='translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0'>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <h2 className='mt-4 text-center text-lg'>{title}</h2>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
