export const fadeInVariant = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5 + (0.1 * index),
    }
  })
}

export const fadeInTransformVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 * index,
    }
  })
}

export const lineVariant = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
    }
  }
}