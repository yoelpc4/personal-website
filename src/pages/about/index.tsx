import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import Avatar from '@/components/Avatar'
import Circles from '@/components/Circles'
import { MotionHeading1, MotionParagraph } from '@/components/MotionComponents'
import TabHeader from '@/pages/about/components/TabHeader'
import TabBody from '@/pages/about/components/TabBody'
import { fadeIn } from '@/utils/framer-motion'
import { attributes, metrics, yearsOfExperience } from '@/data'

export default function About() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Head>
        <title>About Yoel Peter Chandra | Full-Stack Developer</title>
        <meta
          name='description'
          content={`I am Yoel Peter Chandra, a professional full-stack developer with ${yearsOfExperience}+ years of experience working with Laravel, Express.js, React, Vue.js, MySQL, Nginx, and Ubuntu`}
        />
      </Head>
      <section className='bg-primary/30 text-center xl:text-left'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='fixed -left-[370px] bottom-0 hidden xl:flex'
        >
          <Avatar />
        </motion.div>
        <div className='container mx-auto flex min-h-screen flex-col items-center gap-8 py-28 lg:pb-16 xl:flex-row xl:py-0'>
          <article className='flex flex-1 flex-col justify-center gap-6'>
            <MotionHeading1
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Captivating Story <br />
              <span className='text-accent'>Birth Experience</span>
            </MotionHeading1>
            <MotionParagraph
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0'
            >
              I am Yoel Peter Chandra, a professional full-stack developer with
              a passion for creating beautiful, functional, and user-centered
              digital experiences. I believe that web development is not just
              about making things look pretty, but also creating intuitive and
              enjoyable user experiences.
              <br />
              <br />
              Currently, I am working on{' '}
              <Link
                href='https://hreasily.com'
                target='_blank'
                className='text-blue-300 underline underline-offset-4 hover:text-blue-300/80'
              >
                HREasily
              </Link>{' '}
              and maintaining open-source packages on{' '}
              <Link
                href='https://github.com/yoelpc4'
                target='_blank'
                className='text-blue-300 underline underline-offset-4 hover:text-blue-300/80'
              >
                GitHub
              </Link>
              . My favorite tech stacks are Laravel, Express.js, React, Vue.js,
              MySQL, Nginx, and Ubuntu.
            </MotionParagraph>
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto mb-8 md:max-w-xl xl:mx-0 xl:max-w-none'
            >
              <div className='flex flex-1 flex-wrap justify-evenly gap-6 sm:gap-x-6 sm:gap-y-0'>
                {metrics.map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className='relative w-[120px] sm:w-max sm:flex-1'
                  >
                    <div className='mb-2 text-2xl font-extrabold text-accent xl:text-4xl'>
                      <CountUp end={metric.count} duration={5} />+
                    </div>
                    <div className='text-center text-xs uppercase leading-snug tracking-wider sm:max-w-[100px] sm:text-left'>
                      {metric.text}
                    </div>
                    {metricIndex !== metrics.length - 1 && (
                      <span className='absolute right-0 top-0 hidden h-full w-[1px] bg-white/10 sm:block' />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </article>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex h-[420px] w-full flex-col gap-y-4 sm:h-[320px] md:h-[220px] lg:h-[260px] xl:max-w-[48%]'
          >
            <div className='mx-auto flex flex-wrap gap-4 xl:mx-0 xl:gap-x-8'>
              {attributes.map((attribute, attributeIndex) => (
                <TabHeader
                  key={attributeIndex}
                  text={attribute.text}
                  isActive={attributeIndex === index}
                  onClick={() => setIndex(attributeIndex)}
                />
              ))}
            </div>
            <div className='flex flex-col items-center gap-y-6 py-2 xl:mb-8 xl:items-start xl:py-6'>
              {attributes[index].records.map((record, recordIndex) => (
                <TabBody
                  key={recordIndex}
                  title={record.title}
                  period={record.period}
                  icons={record.icons}
                />
              ))}
            </div>
          </motion.div>
        </div>
        <Circles />
      </section>
    </>
  )
}
