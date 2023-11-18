import { Record } from '@/data'

export default function TabBody({ title, period, icons }: Record) {
  return (
    <article className='flex max-w-full flex-1 flex-col items-center gap-x-2 leading-snug text-white/60 md:flex-row md:leading-normal'>
      <h2 className='mb-2 font-light md:mb-0'>{title}</h2>
      <div className='hidden text-accent md:flex'>|</div>
      {period && <p>{period}</p>}
      {icons && (
        <div className='flex flex-wrap gap-4'>
          {icons.map((icon, iconIndex) => (
            <div key={iconIndex} className='text-2xl text-white'>
              {icon}
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
