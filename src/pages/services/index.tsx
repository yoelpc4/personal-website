import Head from 'next/head'
import { motion } from 'framer-motion'
import BulbImage from '@/components/BulbImage'
import Circles from '@/components/Circles'
import { MotionHeading1, MotionParagraph } from '@/components/MotionComponents'
import ServicesTiles from '@/pages/services/components/ServicesTiles'
import { fadeIn } from '@/utils/framer-motion'

export default function Services() {
  return (
    <>
      <Head>
        <title>Yoel Peter Chandra Services | Full-Stack Developer</title>
        <meta
          name='description'
          content='Yoel Peter Chandra has expertise on website, API, and system development including system analysis and SEO to organize your business in structured way'
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
                className='xl:my-8'
              >
                Passion Fuels <span className='text-accent'>Purpose</span>
              </MotionHeading1>
              <MotionParagraph
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto mb-2 max-w-[400px] xl:mx-0'
              >
                I believe a company needs a platform to function correctly,
                according to the defined standard by management. Nowadays sales,
                marketing, and operational activities also need a global
                presence to reach more customer.
                <br /> <br />I am passionate about delivering professional
                services with cutting-edge technology in the form of website,
                API, and system to fulfill your business purpose.
              </MotionParagraph>
            </article>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto w-full lg:max-w-[90%] xl:max-w-[65%]'
            >
              <ServicesTiles />
            </motion.div>
          </div>
        </div>
        <Circles />
      </section>
    </>
  )
}
