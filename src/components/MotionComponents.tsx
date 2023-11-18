import { motion } from 'framer-motion'
import Paragraph from '@/components/Paragraph'
import Heading1 from '@/components/Heading1'
import Heading2 from '@/components/Heading2'

export const MotionHeading1 = motion(Heading1, { forwardMotionProps: true })

export const MotionHeading2 = motion(Heading2, { forwardMotionProps: true })

export const MotionParagraph = motion(Paragraph, { forwardMotionProps: true })
