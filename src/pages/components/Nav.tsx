import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HiEnvelope,
  HiHome,
  HiSquare3Stack3D,
  HiUser,
  HiWindow,
} from 'react-icons/hi2'

const links = [
  { text: 'home', path: '/', icon: <HiHome /> },
  { text: 'about', path: '/about', icon: <HiUser /> },
  { text: 'services', path: '/services', icon: <HiSquare3Stack3D /> },
  { text: 'projects', path: '/projects', icon: <HiWindow /> },
  { text: 'contact', path: '/contact', icon: <HiEnvelope /> },
]

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <nav className='fixed bottom-0 z-50 flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center'>
      <div className='flex h-[75px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-md md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl'>
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.path}
            className={`group relative flex items-center transition-all duration-300 hover:text-accent ${
              link.path === pathname && 'text-accent'
            }`}
            scroll={false}
          >
            {link.icon}
            <div className='absolute right-0 hidden pr-14 xl:group-hover:flex'>
              <div className='relative flex items-center rounded bg-white p-2 text-primary'>
                <div className='text-xs font-semibold capitalize leading-none'>
                  {link.text}
                </div>
                <div className='absolute -right-2 border-y-4 border-l-8 border-r-0 border-solid border-y-transparent border-l-white' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
