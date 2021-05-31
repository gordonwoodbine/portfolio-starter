import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const About = () => {
  return (
    <motion.section
      className="about container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className="about__left">
        <div className="box">
          <h2>A Little Bit About Me...</h2>
        </div>
        <p>As you may have worked out by this point, my name is Mike. I decided to become a web developer last year - I was working in retail when the world fell apart and I realised it was time for a change. I've always loved technology, I like figuring out how things work and I enjoy solving problems so I figured web development could be a good fit for me.</p>
      </div>
      <motion.div className="about__right" variants={childVariants}>
        <div className="box">
          <h2>It's a Whole New World!</h2>
        </div>
        <p style={{textAlign: 'left'}}>I'm not gonna lie - the world of web development is pretty new to me. But what I (currently) lack in experience, I more than make up for in enthusiasm and drive to learn. Since first starting last summer, I've learned HTML, CSS and JavaScript and I'm getting to grips with React - I mean, I built this site with it :) I know what node and npm are now and I feel weird if I don't commit something to git every couple of hours. In short, I may be a new web developer, but I definitely <strong>am</strong> a web developer. <i className="fas fa-laptop-code"></i></p>
      </motion.div>
      <motion.div className="about__left" variants={childVariants}>
        <div className="box">
          <h2>What's The Big Idea?</h2>
        </div>
        <p>Well, in short, I plan to keep on learning as much as I can and making better and better websites. If I can convince someone to give me a job doing this so I can afford coffee and components, so much the better.</p>
      </motion.div>
    </motion.section>
  )
};

export default About;