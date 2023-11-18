import Paragraph from '@/components/Paragraph'
import { services } from '@/data'

export default function ServicesTiles() {
  return (
    <div className='grid grid-cols-1 grid-rows-1 gap-6 sm:grid-cols-2 lg:gap-x-4 lg:gap-y-8 xl:gap-x-20'>
      {services.map(({ title, description, icon }, index) => (
        <div
          key={index}
          className='group flex h-max w-full cursor-pointer items-center gap-x-6 rounded-lg bg-[rgba(65,47,123,.15)] px-5 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,.15)] sm:flex-col sm:items-start sm:gap-x-0 lg:w-max'
        >
          <div className='mb-4 hidden text-4xl text-accent sm:block'>
            {icon}
          </div>
          <article className='flex flex-col items-center text-center sm:items-start sm:text-left'>
            <div className='mb-4 flex items-center gap-2 sm:mb-0'>
              <div className='block text-4xl text-accent sm:mb-4 sm:hidden'>
                {icon}
              </div>
              <h2 className='text-lg sm:mb-5'>{title}</h2>
            </div>
            <Paragraph className='max-w-[350px] leading-normal'>
              {description}
            </Paragraph>
          </article>
        </div>
      ))}
    </div>
  )
}
