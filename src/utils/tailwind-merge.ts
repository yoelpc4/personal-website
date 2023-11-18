import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({}, (config) => {
  delete config.conflictingClassGroups['font-size']

  return config
})
