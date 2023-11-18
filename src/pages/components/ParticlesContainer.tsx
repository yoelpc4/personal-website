import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import type { Engine, ISourceOptions } from 'tsparticles-engine'
import Particles from 'react-tsparticles'

const options: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: '',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 90,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#e6e82e',
    },
    links: {
      color: '#f5d393',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
  },
  detectRetina: true,
}

export default function ParticlesContainer() {
  const init = useCallback((engine: Engine) => loadFull(engine), [])

  return (
    <Particles
      init={init}
      options={options}
      className='translate-z-0 fixed h-screen w-full'
    />
  )
}
