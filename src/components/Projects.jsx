import { motion } from 'framer-motion';
import { sectionVariants } from '../helpers/motionVariants';

const Projects = () => {
  return (
    <motion.section 
      className="projects container"
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className="box">
        <h2>Some Of My Projects</h2>
      </div>
      <p>Here's where you'll find some of the things I've built so far. I'll update/replace these as I continue to improve my skills so expect this to change rather frequently :)</p>
    </motion.section>
  );
};

export default Projects;