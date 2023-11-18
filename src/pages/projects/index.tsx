import Head from 'next/head'
import { motion } from 'framer-motion'
import BulbImage from '@/components/BulbImage'
import Circles from '@/components/Circles'
import { MotionHeading1, MotionParagraph } from '@/components/MotionComponents'
import ProjectsSlider from '@/pages/projects/components/ProjectsSlider'
import { fadeIn } from '@/utils/framer-motion'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Yoel Peter Chandra Projects | Full-Stack Developer</title>
        <meta
          name='description'
          content='Yoel Peter Chandra showcase of portfolios from work and freelance on various businesses including startup companies'
        />
      </Head>
      <section className='flex min-h-screen items-center bg-primary/30'>
        <BulbImage />
        <div className='container mx-auto py-28 xl:py-0'>
          <div className='flex flex-col items-center gap-x-8 xl:flex-row'>
            <article className='mb-4 flex flex-col text-center xl:mb-0 xl:w-[30xw] xl:text-left'>
              <MotionHeading1
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='xl:mt-12'
              >
                Seeing Is <span className='text-accent'>Believing</span>
              </MotionHeading1>
              <MotionParagraph
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto mb-2 max-w-[400px] xl:mx-0'
              >
                When I started to code I thought that when I knew lots of stuff
                I would look professional, after years of work I finally
                understand that portfolio explains more about my expertise.
                <br />
                <br />
                Here is a showcase of my portfolio in website, API, and system
                development from work and freelance on various businesses
                including startup companies.
              </MotionParagraph>
            </article>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto w-full lg:max-w-[90%] xl:max-w-[65%]'
            >
              <ProjectsSlider />
            </motion.div>
          </div>
        </div>
        <Circles />
      </section>
    </>
  )
}
