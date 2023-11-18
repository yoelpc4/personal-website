import { FormEvent } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { BsSend } from 'react-icons/bs'
import Circles from '@/components/Circles'
import { MotionHeading1, MotionParagraph } from '@/components/MotionComponents'
import Input from '@/pages/contact/components/Input'
import Textarea from '@/pages/contact/components/Textarea'
import { fadeIn } from '@/utils/framer-motion'

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  phone: HTMLInputElement
  email: HTMLInputElement
  subject: HTMLInputElement
  message: HTMLInputElement
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default function Contact() {
  const handleSubmit = (event: FormEvent<ContactFormElement>) => {
    event.preventDefault()

    const message = `${event.currentTarget.elements.subject.value}
Name: ${event.currentTarget.elements.name.value}
Phone: ${event.currentTarget.elements.phone.value}
Email: ${event.currentTarget.elements.email.value}

${event.currentTarget.elements.message.value}`

    const url = new URL('https://wa.me/62895622253276')

    url.searchParams.set('text', message)

    window.open(url.href, '_blank', 'noopener noreferrer')

    event.currentTarget.reset()
  }

  return (
    <>
      <Head>
        <title>Contact Yoel Peter Chandra | Full-Stack Developer</title>
        <meta
          name='description'
          content="Leave a message to Yoel Peter Chandra, I'm eager to collaborate with you to escalate your business using my expertise and cutting-edge technology"
        />
      </Head>
      <section className='min-h-screen bg-primary/30'>
        <div className='container mx-auto flex min-h-screen items-center justify-center py-28 text-center md:py-2 xl:text-left'>
          <div className='flex w-full max-w-[700px] flex-col items-center gap-8'>
            <article className='text-center'>
              <MotionHeading1
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 text-center'
              >
                Get <span className='text-accent'>In Touch</span>
              </MotionHeading1>
              <MotionParagraph
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mx-auto mb-2 max-w-[500px]'
              >
                Please let me know about your requirements in order to
                collaborate together to escalate your business
              </MotionParagraph>
            </article>
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mx-auto grid w-full grid-cols-2 gap-8 sm:px-0'
              onSubmit={handleSubmit}
            >
              <Input
                type='text'
                name='name'
                placeholder='Name'
                required
                className='col-span-2 sm:col-span-1'
              />
              <Input
                type='tel'
                name='phone'
                placeholder='Phone'
                required
                className='col-span-2 sm:col-span-1'
              />
              <Input
                type='email'
                name='email'
                placeholder='Email'
                required
                className='col-span-2 sm:col-span-1'
              />
              <Input
                type='text'
                name='subject'
                placeholder='Subject'
                required
                className='col-span-2 sm:col-span-1'
              />
              <Textarea
                name='message'
                placeholder='Message'
                required
                className='col-span-2'
              />
              <button className='group col-span-2 mx-auto flex h-[52px] max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent'>
                <span className='transition-all duration-500 group-hover:-translate-y-[120%] group-hover:text-accent group-hover:opacity-0'>
                  Send
                </span>
                <BsSend className='absolute translate-y-[120%] text-lg opacity-0 transition-all duration-300 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100' />
              </button>
            </motion.form>
          </div>
        </div>
        <Circles />
      </section>
    </>
  )
}
