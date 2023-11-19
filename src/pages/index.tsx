import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Avatar from '@/components/Avatar'
import {
  MotionHeading1,
  MotionHeading2,
  MotionParagraph,
} from '@/components/MotionComponents'
import ParticlesContainer from '@/pages/components/ParticlesContainer'
import ProjectsLink from '@/pages/components/ProjectsLink'
import ServiceSlider from '@/pages/components/ServiceSlider'
import { fadeIn } from '@/utils/framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yoel Peter Chandra | Professional Full-Stack Developer</title>
        <meta
          name='description'
          content='Meet Yoel Peter Chandra, a professional full-stack developer experienced on web development for various businesses including startup companies'
        />
      </Head>
      <div className='flex flex-col gap-0 bg-primary/60'>
        <section className='relative h-screen'>
          <div className='h-screen w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 sm:h-[110vh] md:h-[115vh] xl:h-screen'>
            <article className='container mx-auto flex min-h-screen flex-col justify-center py-28 text-center sm:pt-28 xl:pt-40 xl:text-left'>
              <MotionHeading1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                size='large'
                className='z-10'
              >
                Turning Vision <br />
                <span className='text-accent'>Into Reality</span>
              </MotionHeading1>
              <MotionParagraph
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='z-10 mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl'
              >
                As a professional full-stack developer, I am Yoel Peter Chandra
                dedicated to turning vision into innovative website
                applications. Explore my latest projects which showcase my
                expertise in web development from various businesses including
                startup companies.
              </MotionParagraph>
              <div className='relative z-10 flex justify-center xl:hidden'>
                <ProjectsLink />
              </div>
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='z-10 hidden xl:flex'
              >
                <ProjectsLink />
              </motion.div>
            </article>
          </div>
          <div className='absolute bottom-0 right-0 h-screen w-full'>
            <div className='translate-z-0 absolute h-screen w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat' />
            <ParticlesContainer />
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='absolute -bottom-32 hidden h-full max-h-[678px] w-full max-w-[737px] xl:bottom-0 xl:right-[8%] xl:block'
            >
              <Avatar />
            </motion.div>
          </div>
        </section>
        <section className='z-10 flex h-[70vh] flex-col items-center justify-center gap-8 bg-primary/70 xl:h-[50vh]'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-14 xl:flex-row xl:gap-x-8'>
              <article className='flex flex-col text-center xl:mb-0 xl:w-[30xw] xl:text-left'>
                <MotionHeading2
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4'
                >
                  My <span className='text-accent'>Services</span>
                </MotionHeading2>
                <MotionParagraph
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-8'
                >
                  These are my expertise in technology to escalate your business
                </MotionParagraph>
                <Link
                  href='/services'
                  scroll={false}
                  className='mx-auto flex h-[52px] max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent hover:text-accent xl:mx-0'
                >
                  Learn More
                </Link>
              </article>
              <motion.div
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='w-full xl:max-w-[65%]'
              >
                <ServiceSlider />
              </motion.div>
            </div>
          </div>
        </section>
        <section className='z-10 flex h-[60vh] flex-col items-center justify-center gap-8 py-8 xl:h-[50vh] xl:py-0'>
          <article className='text-center'>
            <MotionHeading2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4'
            >
              Let&apos;s <span className='text-accent'>Talk</span>
            </MotionHeading2>
            <MotionParagraph
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Have any inquiries regarding my services? Leave a message to me
            </MotionParagraph>
          </article>
          <Link
            href='/contact'
            scroll={false}
            className='flex h-[52px] max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent hover:text-accent'
          >
            Contact Me
          </Link>
        </section>
      </div>
    </>
  )
}
