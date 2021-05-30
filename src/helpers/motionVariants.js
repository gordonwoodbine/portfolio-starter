export const sectionVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    when: 'beforeChildren',
    staggerChildren: 1.4
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
};