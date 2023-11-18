import { RxCode, RxFileText, RxGear } from 'react-icons/rx'
import { VscJson } from 'react-icons/vsc'
import {
  FaBitbucket,
  FaCloudflare,
  FaCss3,
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaUbuntu,
  FaVuejs,
} from 'react-icons/fa6'
import {
  SiExpress,
  SiJsonwebtokens,
  SiLetsencrypt,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNuxtdotjs,
  SiPostgresql,
  SiPusher,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiTelegramLine,
  RiWhatsappLine,
} from 'react-icons/ri'

export interface Metric {
  count: number
  text: string
}

export interface Record {
  title: string
  period?: string
  icons?: React.JSX.Element[]
}

export interface Attribute {
  text: string
  records: Record[]
}

export const yearsOfExperience = new Date().getFullYear() - 2019

export const metrics: Metric[] = [
  {
    count: yearsOfExperience,
    text: 'years of experience',
  },
  {
    count: 10,
    text: 'clients and companies',
  },
  {
    count: 20,
    text: 'finished projects',
  },
  {
    count: 3,
    text: 'open source packages',
  },
]

export const attributes: Attribute[] = [
  {
    text: 'skills',
    records: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5 key='Html5' />,
          <FaCss3 key='Css3' />,
          <SiTailwindcss key='Tailwindcss' />,
          <FaJs key='Js' />,
          <SiTypescript key='Typescript' />,
          <FaReact key='React' />,
          <SiNextdotjs key='Nextdotjs' />,
          <FaVuejs key='Vuejs' />,
          <SiNuxtdotjs key='Nuxtdotjs' />,
        ],
      },
      {
        title: 'Backend',
        icons: [
          <FaPhp key='Php' />,
          <FaLaravel key='Laravel' />,
          <FaNodeJs key='Nodejs' />,
          <SiExpress key='Express' />,
          <SiMysql key='Mysql' />,
          <SiPostgresql key='Postgresql' />,
          <SiJsonwebtokens key='Jsonwebtokens' />,
          <SiRedis key='Redis' />,
          <SiPusher key='Pusher' />,
        ],
      },
      {
        title: 'DevOps',
        icons: [
          <FaGithub key='Github' />,
          <FaBitbucket key='Bitbucket' />,
          <FaGitlab key='Gitlab' />,
          <FaUbuntu key='Ubuntu' />,
          <SiNginx key='Nginx' />,
          <FaDigitalOcean key='DigitalOcean' />,
          <SiLetsencrypt key='Letsencrypt' />,
          <FaCloudflare key='Cloudflare' />,
          <FaDocker key='Docker' />,
        ],
      },
    ],
  },
  {
    text: 'experiences',
    records: [
      {
        title: 'Software Developer @HREasily',
        period: '2023 - Present',
      },
      {
        title: 'Full-Stack Developer @Freelance',
        period: '2018 - Present',
      },
      {
        title: 'Full-Stack Developer @OMNI IT Consulting',
        period: '2021 - 2022',
      },
      {
        title: 'Full-Stack Developer @AssetKita',
        period: '2019 - 2020',
      },
    ],
  },
  {
    text: 'educations',
    records: [
      {
        title: 'Bachelor Degree @Ma Chung University',
        period: '2014 - 2018',
      },
      {
        title: 'Senior High School @SMAK Mater Dei',
        period: '2010 - 2014',
      },
    ],
  },
  {
    text: 'awards',
    records: [
      {
        title: '3rd winner @SWBC Petra University',
        period: '2015',
      },
    ],
  },
]

export const services = [
  {
    title: 'Web Development',
    description:
      'Build a website to provides an global presence of your business',
    icon: <RxCode />,
  },
  {
    title: 'API Development',
    description:
      'Build an interface to communicate and sharing data with another party',
    icon: <VscJson />,
  },
  {
    title: 'System Development',
    description:
      'Build platform used to collect, process, and store data into information',
    icon: <RxGear />,
  },
  {
    title: 'System Analysis',
    description:
      'Assess current state and propose improvement to enhance business',
    icon: <RxFileText />,
  },
]

export const projects = [
  {
    title: 'HREasily',
    image: '/images/hreasily.jpg',
    url: 'https://hreasily.com',
  },
  {
    title: 'HREasily Pro',
    image: '/images/hreasily-pro.jpg',
    url: 'https://hreasily.com/hreasilypro',
  },
  {
    title: 'Petra Christian University Events',
    image: '/images/petra-christian-university-events.jpg',
    url: 'https://events.petra.ac.id',
  },
  {
    title: 'Certified Public Accountant SCEF',
    image: '/images/certified-public-accountant-scef.jpg',
    url: 'https://scef.co.id',
  },
]

export const socials = [
  {
    url: 'https://linkedin.com/in/yoelpc4',
    icon: <RiLinkedinLine />,
  },
  {
    url: 'https://github.com/yoelpc4',
    icon: <RiGithubLine />,
  },
  {
    url: 'https://wa.me/62895622253276',
    icon: <RiWhatsappLine />,
  },
  {
    url: 'https://t.me/yoelpc4',
    icon: <RiTelegramLine />,
  },
  {
    url: 'mailto:yoelpc4@gmail.com',
    icon: <RiMailLine />,
  },
]
