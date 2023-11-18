import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import { services } from '@/data'

export default function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[200px]'
    >
      {services.map(({ title, icon }, index) => (
        <SwiperSlide key={index}>
          <div
            className='
              group flex h-max cursor-pointer flex-col gap-6 rounded-lg bg-[rgba(65,47,123,.15)] px-6
              py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,.15)]
            '
          >
            <div className='text-4xl text-accent'>{icon}</div>
            <div className='text-lg'>{title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
