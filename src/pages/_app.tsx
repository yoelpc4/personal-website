import type { AppProps } from 'next/app'
import { Sora } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import TopLeftImage from '@/pages/components/TopLeftImage'
import Header from '@/pages/components/Header'
import Nav from '@/pages/components/Nav'
import Main from '@/pages/components/Main'
import '@/styles/globals.css'
// we need to import swiper css globally because when it's imported on specific page
// it'll be removed on that page during page unmounts with framer motion transition
// https://github.com/framer/motion/issues/2031
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <div
        className={`relative overflow-x-hidden bg-secondary bg-background bg-cover bg-no-repeat p-0 ${sora.variable} font-sora leading-relaxed text-white`}
      >
        <TopLeftImage />
        <Header />
        <Nav />
        <Main>
          <Component {...pageProps} />
        </Main>
      </div>
    </>
  )
}
